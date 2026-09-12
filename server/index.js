import cors from "cors";
import express from "express";
import multer from "multer";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

async function main() {
    const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
    const dataDirectory = path.join(root, "data");
    const uploadsDirectory = path.join(root, "uploads");
    const dataFile = path.join(dataDirectory, "constructions.json");

    await fs.mkdir(dataDirectory, { recursive: true });
    await fs.mkdir(uploadsDirectory, { recursive: true });
    try {
        await fs.access(dataFile);
    } catch {
        await fs.writeFile(dataFile, "[]", "utf8");
    }

    const readConstructions = async () =>
        JSON.parse(await fs.readFile(dataFile, "utf8"));
    const writeConstructions = (items) =>
        fs.writeFile(dataFile, JSON.stringify(items, null, 2), "utf8");
    const createId = () =>
        `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

    const storage = multer.diskStorage({
        destination: uploadsDirectory,
        filename: (_request, file, callback) => {
            const extension = path.extname(file.originalname).toLowerCase();
            callback(null, `${createId()}${extension}`);
        },
    });
    const upload = multer({ storage });
    const app = express();

    app.use(cors());
    app.use(express.json({ limit: "1mb" }));

    // Archivos estáticos
    app.use("/uploads", express.static(uploadsDirectory));
    app.use(express.static(path.join(root, "dist")));

    // Rutas API
    app.get("/api/constructions", async (req, res) => {
        const items = await readConstructions();
        const filtered = req.query.type
            ? items.filter((item) => item.type === req.query.type)
            : items;
        res.json(filtered.sort((a, b) => b.created_date.localeCompare(a.created_date)));
    });

    app.post("/api/constructions", async (req, res) => {
        const item = {
            ...req.body,
            id: createId(),
            created_date: new Date().toISOString(),
        };
        const items = await readConstructions();
        await writeConstructions([...items, item]);
        res.status(201).json(item);
    });

    app.put("/api/constructions/:id", async (req, res) => {
        const items = await readConstructions();
        const index = items.findIndex((item) => item.id === req.params.id);
        if (index === -1) return res.sendStatus(404);
        items[index] = { ...items[index], ...req.body };
        await writeConstructions(items);
        res.json(items[index]);
    });

    app.delete("/api/constructions/:id", async (req, res) => {
        const items = await readConstructions();
        await writeConstructions(items.filter((item) => item.id !== req.params.id));
        res.sendStatus(204);
    });

    app.post("/api/uploads", upload.single("file"), (req, res) => {
        if (!req.file) return res.status(400).json({ error: "No se recibió ningún archivo." });
        res.status(201).json({ file_url: `/uploads/${req.file.filename}` });
    });

    // Catch‑all para frontend (React Router)
    app.use((req, res, next) => {
        // Evitamos interceptar rutas de API
        if (req.path.startsWith("/api")) {
            return next();
        }
        res.sendFile(path.join(root, "dist", "index.html"));
    });

    const port = process.env.PORT || 3001;
    app.listen(port, "0.0.0.0", () => {
        console.log(`API and frontend running on port ${port}`);
    });
}

main();

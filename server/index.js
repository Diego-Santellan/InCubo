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

    const readConstructions = async () => JSON.parse(await fs.readFile(dataFile, "utf8"));
    const writeConstructions = (items) => fs.writeFile(dataFile, JSON.stringify(items, null, 2), "utf8");
    const createId = () => `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

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
    app.use("/uploads", express.static(uploadsDirectory));
    app.use(express.static(path.join(root, "dist")));

    // tus rutas aquí...
      app.get("/admin-login", (_req, res) => {
    res.sendFile(path.join(root, "dist", "index.html"));
  });

  app.get("/admin", (_req, res) => {
    res.sendFile(path.join(root, "dist", "index.html"));
  });

    const port = process.env.PORT || 3001;
    app.listen(port, "0.0.0.0", () => {
        console.log(`API and frontend running on port ${port}`);
    });
}

main();

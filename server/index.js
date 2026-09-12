import cors from "cors";
import express from "express";
import multer from "multer";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

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

app.get("/api/constructions", async (request, response) => {
  const items = await readConstructions();
  const filtered = request.query.type ? items.filter((item) => item.type === request.query.type) : items;
  response.json(filtered.sort((a, b) => b.created_date.localeCompare(a.created_date)));
});

app.post("/api/constructions", async (request, response) => {
  const item = { ...request.body, id: createId(), created_date: new Date().toISOString() };
  const items = await readConstructions();
  await writeConstructions([...items, item]);
  response.status(201).json(item);
});

app.put("/api/constructions/:id", async (request, response) => {
  const items = await readConstructions();
  const index = items.findIndex((item) => item.id === request.params.id);
  if (index === -1) return response.sendStatus(404);
  items[index] = { ...items[index], ...request.body };
  await writeConstructions(items);
  response.json(items[index]);
});

app.delete("/api/constructions/:id", async (request, response) => {
  const items = await readConstructions();
  await writeConstructions(items.filter((item) => item.id !== request.params.id));
  response.sendStatus(204);
});

app.post("/api/uploads", upload.single("file"), (request, response) => {
  if (!request.file) return response.status(400).json({ error: "No se recibió ningún archivo." });
  response.status(201).json({ file_url: `/uploads/${request.file.filename}` });
});

app.use((_request, response) => {
  response.sendFile(path.join(root, "dist", "index.html"));
});

const port = process.env.PORT || 3001;
app.listen(port, "0.0.0.0", () => {
  console.log(`API and frontend running on port ${port}`);
});
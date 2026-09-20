import express from "express"
import cors from "cors"
import fs from "fs/promises"
import path from "path"
import { fileURLToPath } from "url"

const nombreDirectorio = path.dirname(fileURLToPath(import.meta.url))
const datos = path.join(nombreDirectorio, "../src/data/tasks.json")

const app = express()
app.use(cors())
app.use(express.json())

app.get("/api/tasks", async (req, res) => {
  try {
    const raw = await fs.readFile(datos, "utf-8")
    res.json(JSON.parse(raw))
  } catch (err) {
    res.status(500).json({ error: "No se pudo leer tasks.json" })
  }
})

app.post("/api/tasks", async (req, res) => {
  try {
    await fs.writeFile(datos, JSON.stringify(req.body, null, 2))
    res.json({ ok: true })
  } catch (err) {
    res.status(500).json({ error: "No se pudo guardar tasks.json" })
  }
})

const PORT = 3001
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`))
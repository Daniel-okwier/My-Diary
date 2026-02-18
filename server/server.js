import express from "express"
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"
import mongoose from "mongoose"
import rateLimit from "express-rate-limit"
import { env } from "./config/env.js"

import authRoutes from "./routes/auth.routes.js"
import diaryRoutes from "./routes/diary.routes.js"
import aiRoutes from "./routes/ai.routes.js"

const app = express()

// ---------------- Security ----------------
app.use(helmet())

app.use(cors({
  origin: env.nodeEnv === "production"
    ? env.frontendUrl
    : "*",
  credentials: true
}))

app.use(express.json())

// ---------------- Rate Limit ----------------
app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
}))

// ---------------- Logging ----------------
if (env.nodeEnv === "development") {
  app.use(morgan("dev"))
}

// ---------------- Routes ----------------
app.use("/api/auth", authRoutes)
app.use("/api/diary", diaryRoutes)
app.use("/api/ai", aiRoutes)

app.get("/", (req, res) => {
  res.json({ message: "MyDiary API running " })
})

// ---------------- Error Handler ----------------
app.use((err, req, res, next) => {
  console.error(err)
  res.status(err.status || 500).json({
    message: err.message || "Server error"
  })
})

// ---------------- Database ----------------
mongoose.connect(env.mongoUri)
  .then(() => {
    console.log("MongoDB connected")

    const server = app.listen(env.port, () => {
      console.log(`Server running on port ${env.port}`)
    })

    // Graceful shutdown
    process.on("SIGTERM", () => {
      console.log("Server shutting down...")
      server.close(() => {
        mongoose.connection.close(false, () => {
          process.exit(0)
        })
      })
    })

  })
  .catch((err) => {
    console.error(" DB connection failed:", err)
  })

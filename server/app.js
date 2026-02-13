import express from "express";
import cors from "cors";

import healthRoutes from "./routes/health.routes.js";
import authRoutes from "./routes/auth.routes.js";
import entryRoutes from "./routes/entry.routes.js";
import aiRoutes from "./routes/ai.routes.js";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import { errorHandler } from "./middleware/error.middleware.js";



const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(helmet());
// General limiter
const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 200,
});

// Auth limiter (stricter)
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
});

// AI limiter (protect free API)
const aiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 30,
});

app.use(generalLimiter);




app.use("/api/health", healthRoutes);
app.use("/api/auth", authLimiter, authRoutes);
app.use("/api/entries", entryRoutes);
app.use("/api/ai", authLimiter, aiRoutes);
app.use(errorHandler);


export default app;

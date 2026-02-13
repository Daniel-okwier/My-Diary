import { Router } from "express";
import {
  enhanceEntry,
  titleGenerator,
  summaryGenerator,
  moodAnalyzer,
} from "../controllers/ai.controller.js";

import { protect } from "../middleware/auth.middleware.js";

const router = Router();

router.use(protect);

router.post("/enhance", enhanceEntry);
router.post("/title", titleGenerator);
router.post("/summary", summaryGenerator);
router.post("/mood", moodAnalyzer);

export default router;

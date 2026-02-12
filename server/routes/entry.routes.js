import { Router } from "express";
import {
  createEntry,
  getEntries,
  getEntry,
  updateEntry,
  deleteEntry,
} from "../controllers/entry.controller.js";

import { protect } from "../middleware/auth.middleware.js";

const router = Router();

router.use(protect); 

router.post("/", createEntry);
router.get("/", getEntries);
router.get("/:id", getEntry);
router.put("/:id", updateEntry);
router.delete("/:id", deleteEntry);

export default router;

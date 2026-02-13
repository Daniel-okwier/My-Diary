import { Router } from "express";
import {
  createEntry,
  getEntries,
  getEntry,
  updateEntry,
  deleteEntry,
} from "../controllers/entry.controller.js";

import { protect } from "../middleware/auth.middleware.js";
import { body } from "express-validator";
import { query } from "express-validator";



const router = Router();

router.use(protect); 

router.post(
  "/",
  [
    body("content")
      .notEmpty()
      .withMessage("Content is required"),
  ],
  createEntry
);

router.get(
  "/",
  [
    query("page").optional().isInt({ min: 1 }),
    query("limit").optional().isInt({ min: 1, max: 50 }),
  ],
  getEntries
);
router.get("/:id", getEntry);
router.put("/:id", updateEntry);
router.delete("/:id", deleteEntry);

export default router;

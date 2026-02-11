import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json({
    status: "ok",
    service: "MyDiary API",
    timestamp: new Date(),
  });
});

export default router;

import express from "express";
import { createExam, getExams, getExamById } from "../controllers/ExamControllers.js";

const router = express.Router();

router.post("/", createExam);
router.get("/", getExams);
router.get("/:id", getExamById);

export default router;
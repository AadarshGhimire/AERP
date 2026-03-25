import express from "express";
import Question from "../models/QuestionModel.js";

const router = express.Router();

// GET QUESTIONS BY EXAM ID
router.get("/:examId", async (req, res) => {
  try {
    const questions = await Question.find({
      examId: req.params.examId,
    });

    res.json(questions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
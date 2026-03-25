import express from "express";
import Exam from "../models/ExamModel.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const exam = await Exam.create(req.body);
  res.json(exam);
});

router.get("/", async (req, res) => {
  try {
    let filter = {};

    if (req.query.courseId) {
      filter.courseId = req.query.courseId;
    }

    const exams = await Exam.find(filter);
    res.json(exams);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    await Exam.findByIdAndDelete(req.params.id);
    res.json({ message: "Exam deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
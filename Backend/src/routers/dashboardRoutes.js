import express from "express";
import multer from "multer";
import xlsx from "xlsx";
import Question from "../models/QuestionModel.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/", upload.single("file"), async (req, res) => {

  const workbook = xlsx.readFile(req.file.path);
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const data = xlsx.utils.sheet_to_json(sheet);

  const examId = req.body.examId;

  const formatted = data.map(row => ({
    examId,
    question: row.question,
    options: [row.optionA, row.optionB, row.optionC, row.optionD],
    answer: row.answer
  }));

  await Question.insertMany(formatted);

  res.json({ message: "Questions uploaded" });
});

export default router;
import express from "express";
import multer from "multer";
import xlsx from "xlsx";
import Question from "../models/QuestionModel.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });


// ✅ UPLOAD QUESTIONS
router.post("/", upload.single("file"), async (req, res) => {
  const workbook = xlsx.readFile(req.file.path);
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const data = xlsx.utils.sheet_to_json(sheet);

  const examId = req.body.examId;

 const formatted = data.map((row) => {

  const options = [
    String(row.optionA || row.OptionA || "").trim(),
    String(row.optionB || row.OptionB || "").trim(),
    String(row.optionC || row.OptionC || "").trim(),
    String(row.optionD || row.OptionD || "").trim(),
  ];

  return {
    examId,
    question: String(row.question || row.Question || "").trim(),
    options,
    answer: String(row.answer || row.Answer || "").trim(),
  };
});

  await Question.insertMany(formatted);

  res.json({ message: "Questions uploaded" });
});



//

export default router;
import mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema({
  examId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Exam"
  },
  question: String,
  options: [String],
  answer: String
});

export default mongoose.model("Question", QuestionSchema);
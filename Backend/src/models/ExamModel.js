import mongoose from "mongoose";

const ExamSchema = new mongoose.Schema({
  title: String,
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course"
  },
  duration: Number
});

export default mongoose.model("Exam", ExamSchema);
import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema({
  title: String,
  image: String,
  description: String,
  price: Number,
  category: String,
  learn: [String],
  rating: Number,
  students: Number,
});

export default mongoose.model("Course", CourseSchema);
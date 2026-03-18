import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    description: {
      type: String,
      required: true
    },

    duration: {
      type: Number, 
      required: true
    },

    price: {
      type: Number,
      required: true
    },

    thumbnail: {
      type: String
    },

    isActive: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

export const Course = mongoose.model("Course", CourseSchema);
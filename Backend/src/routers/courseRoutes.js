import express from "express";
import Course from "../models/CourseModel.js";

const router = express.Router();

// GET ALL
router.get("/", async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// CREATE
router.post("/", async (req, res) => {
  try {
    const course = new Course(req.body);
    await course.save();
    res.json(course);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
//EDIT
router.put("/:id", async (req, res) => {
  try {
    const updated = await Course.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        image: req.body.image,
        description: req.body.description,
        category: req.body.category,

        // 🔥 SAFE TYPE FIX
        price: Number(req.body.price || 0),
        students: Number(req.body.students || 0),

        learn: Array.isArray(req.body.learn)
          ? req.body.learn
          : [],
      },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.json(updated);
  } catch (err) {
    console.error("UPDATE ERROR:", err); // 🔥 IMPORTANT
    res.status(500).json({ error: err.message });
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  try {
    await Course.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
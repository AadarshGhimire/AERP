import {Exam} from "../models/ExamModel.js";

// Create Exam
export const createExam = async (req, res) => {
  try {
    const exam = new Exam(req.body);
    const saved = await exam.save();

    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All Exams
export const getExams = async (req, res) => {
  try {
    const exams = await Exam.find();
    res.json(exams);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Exam by ID
export const getExamById = async (req, res) => {
  try {
    const exam = await Exam.findById(req.params.id);
    res.json(exam);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
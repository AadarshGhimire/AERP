import mongoose from 'mongoose';
import { Vision } from '../models/VisionModel.js';

export const createVision = async (req, res) => {
  try {
    const { name, description, icon } = req.body;
    const vision = new Vision({ name, description, icon });
    await vision.save();
    res.status(201).json(vision);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getVisions = async (req, res) => {
  try {
    const visions = await Vision.find();
    res.status(200).json(visions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const getVisionById = async (req, res) => {
  try {
    const vision = await Vision.findById(req.params.id);
    if (!vision) {
      return res.status(404).json({ message: 'Vision not found' });
    }
    res.status(200).json(vision);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateVision = async (req, res) => {
  try {
    const { name, description, icon } = req.body;
    const vision = await Vision.findByIdAndUpdate(
      req.params.id,
      { name, description, icon },
      { new: true }
    );
    if (!vision) {
      return res.status(404).json({ message: 'Vision not found' });
    }
    res.status(200).json(vision);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteVision = async (req, res) => {
  try {
    const vision = await Vision.findByIdAndDelete(req.params.id);
    if (!vision) {
      return res.status(404).json({ message: 'Vision not found' });
    }
    res.status(200).json({ message: 'Vision deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
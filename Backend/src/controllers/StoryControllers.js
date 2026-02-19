import mongoose from "mongoose";
import { Story } from "../models/StoryModel.js";

export const createStory = async (req, res) => {
    try {
        const story = new Story(req.body);
        await story.save();
        res.status(201).json(story);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getStoryId = async (req, res) => {
    try {
        const story = await Story.findById(req.params.id);
        if (!story) {
            return res.status(404).json({ message: "Data not found" });
        }
        res.json(story);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const updateStory = async (req, res) => {
    try {
        const story = await Story.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!story) {
            return res.status(404).json({ message: "Data not found" });
        }
        res.json(story);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const deleteStory = async (req, res) => {
    try {
        const story = await Story.findByIdAndDelete(req.params.id);
        if (!story) {
            return res.status(404).json({ message: "Data not found" });
        }
        res.json({ message: "Data deleted successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const getAllStory = async (req, res) => {
    try {
        const story = await Story.find();
        res.json(story);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
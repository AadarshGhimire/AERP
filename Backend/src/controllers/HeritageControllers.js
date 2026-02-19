import mongoose from "mongoose";
import { Heritage } from "../models/HeritageModel.js";

export const createHeritage = async (req, res) => {
    try {
        const heritage = new Heritage(req.body);
        await heritage.save();
        res.status(201).json(heritage);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getHeritageId = async (req, res) => {
    try {
        const heritage = await Heritage.findById(req.params.id);
        if (!heritage) {
            return res.status(404).json({ message: "Data not found" });
        }
        res.json(heritage);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const updateHeritage = async (req, res) => {
    try {
        const heritage = await Heritage.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!heritage) {
            return res.status(404).json({ message: "Data not found" });
        }
        res.json(heritage);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const deleteHeritage = async (req, res) => {
    try {
        const heritage = await Heritage.findByIdAndDelete(req.params.id);
        if (!heritage) {
            return res.status(404).json({ message: "Data not found" });
        }
        res.json({ message: "Data deleted successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const getAllHeritage = async (req, res) => {
    try {
        const heritage = await Heritage.find();
        res.json(heritage);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
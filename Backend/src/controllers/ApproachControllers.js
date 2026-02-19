import {Approach} from "../models/ApproachModel.js"

export const createApproach = async (req, res) => {
    try {
        const { title, description, imageurl } = req.body;
        const newApproach = new Approach({title, description, imageurl});
        await newApproach.save();
        res.status(201).json({data: newApproach, success: true });
    }
    catch (error) {
        res.status(500).json({ message: error.message, success: false });
    }
}

export const getAllApproach = async (req, res) => {
    try {
        const approach = await Approach.find();
        res.status(200).json({ data: approach, success: true });
    } catch (error) {
        res.status(500).json({ message: error.message, success: false });
    }
};

export const getApproachById = async (req, res) => {
    try {
        const { id } = req.params;
        const approach = await Approach.findById(id);
        if (!approach) {
            return res.status(404).json({ message: "Data not found", success: false });
        }
        res.status(200).json({ data: approach, success: true });
    } catch (error) {
        res.status(500).json({ message: error.message, success: false });
    }
};

export const updateApproach = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, imageurl } = req.body;
        const updatedApproach = await Approach.findByIdAndUpdate(id, { title, description, imageurl }, { new: true });
        if (!updatedApproach) {
            return res.status(404).json({ message: "Data not found", success: false });
        }
        res.status(200).json({ data: updatedApproach, success: true });
    } catch (error) {
        res.status(500).json({ message: error.message, success: false });
    }
};

export const deleteApproach = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedApproach = await Approach.findByIdAndDelete(id);
        if (!deletedApproach) {
            return res.status(404).json({ message: "Data not found", success: false });
        }
        res.status(200).json({ message: "Data deleted successfully", success: true });
    } catch (error) {
        res.status(500).json({ message: error.message, success: false });
    }
};
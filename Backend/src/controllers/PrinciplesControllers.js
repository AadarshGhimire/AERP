import { Principle } from "../models/PrincipleModel.js";

export const createPrinciple = async (req, res) => {
    try {
        const { title, description, icon } = req.body;
        const newPrinciple = new Principle({ title, description, icon });
        await newPrinciple.save();
        res.status(201).json(newPrinciple);
    } catch (error) {
        res.status(500).json({ message: "Error creating principle", error });
    }
};

export const getAllPrinciples = async (req, res) => {
    try {
        const principles = await Principle.find();
        res.status(200).json(principles);
    } catch (error) {
        res.status(500).json({ message: "Error fetching principles", error });
    }
};

export const getPrincipleById = async (req, res) => {
    try {
        const principle = await Principle.findById(req.params.id);
        if (!principle) {
            return res.status(404).json({ message: "Principle not found" });
        }
        res.status(200).json(principle);
    } catch (error) {
        res.status(500).json({ message: "Error fetching principle", error });
    }
};

export const updatePrinciple = async (req, res) => {
    try {
        const { title, description, icon } = req.body;
        const updatedPrinciple = await Principle.findByIdAndUpdate(
            req.params.id,
            { title, description, icon },
            { new: true }
        );
        if (!updatedPrinciple) {
            return res.status(404).json({ message: "Principle not found" });
        }
        res.status(200).json(updatedPrinciple);
    } catch (error) {
        res.status(500).json({ message: "Error updating principle", error });
    }
};

export const deletePrinciple = async (req, res) => {
    try {
        const deletedPrinciple = await Principle.findByIdAndDelete(req.params.id);
        if (!deletedPrinciple) {
            return res.status(404).json({ message: "Principle not found" });
        }
        res.status(200).json({ message: "Principle deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting principle", error });
    }
};
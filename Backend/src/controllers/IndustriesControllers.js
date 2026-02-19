import { Industry } from "../models/IndustriesModel.js";

export const createIndustry = async (req, res) => {
    try {
        const { icon, name, text, text2 } = req.body;
        const newIndustry = new Industry({ icon, name, text, text2 });
        await newIndustry.save();
        res.status(201).json(newIndustry);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getIndustries = async (req, res) => {
    try {
        const industries = await Industry.find();
        res.status(200).json(industries);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getIndustryById = async (req, res) => {
    try {
        const industry = await Industry.findById(req.params.id);
        if (!industry) {
            return res.status(404).json({ message: "Industry not found" });
        }
        res.status(200).json(industry);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateIndustry = async (req, res) => {
    try {
        const { icon, name, text, text2 } = req.body;
        const updatedIndustry = await Industry.findByIdAndUpdate(
            req.params.id,
            { icon, name, text, text2 },
            { new: true }
        );
        if (!updatedIndustry) {
            return res.status(404).json({ message: "Industry not found" });
        }
        res.status(200).json(updatedIndustry);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteIndustry = async (req, res) => {
    try {
        const deletedIndustry = await Industry.findByIdAndDelete(req.params.id);
        if (!deletedIndustry) {
            return res.status(404).json({ message: "Industry not found" });
        }
        res.status(200).json({ message: "Industry deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
import { WhyChooseUs } from "../models/ChooseUsModel.js";

export const getAllWhyChooseUs = async (req, res) => {
    try {
        const whyChooseUs = await WhyChooseUs.find();
        res.status(200).json({ data: whyChooseUs, success: true });
    } catch (error) {
        res.status(500).json({ message: error.message, success: false });
    }
};

export const addWhyChooseUs = async (req, res) => {
    try {
        const { title, description, icon } = req.body;
        const newWhyChooseUs = new WhyChooseUs({title, description, icon});
        await newWhyChooseUs.save();
        res.status(201).json({data: newWhyChooseUs, success: true });
    } catch (error) {
        res.status(500).json({ message: error.message, success: false });
    }
}

export const getWhyChooseUsById = async (req, res) => {
    try {
        const { id } = req.params;
        const whyChooseUs = await WhyChooseUs.findById(id);
        if (!whyChooseUs) {
            return res.status(404).json({ message: "Data not found", success: false });
        }
        res.status(200).json({ data: whyChooseUs, success: true });
    } catch (error) {
        res.status(500).json({ message: error.message, success: false });
    }
};
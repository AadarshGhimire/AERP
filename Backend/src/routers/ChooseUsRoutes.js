import { getAllWhyChooseUs, addWhyChooseUs,getWhyChooseUsById } from "../controllers/ChooseUsControllers.js";
import express from "express";

const router = express.Router();

router.get("/choose-us", getAllWhyChooseUs);
router.get("/choose-us/:id", getWhyChooseUsById);
router.post("/add-choose-us", addWhyChooseUs);

export default router;
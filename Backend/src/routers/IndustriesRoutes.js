import express from "express";
import { createIndustry,getIndustries,getIndustryById,updateIndustry,deleteIndustry } from "../controllers/IndustriesControllers.js";

const router = express.Router();

router.post("/add-industry", createIndustry);
router.get("/industries", getIndustries);
router.get("/industries/:id", getIndustryById);
router.put("/industries/:id", updateIndustry);
router.delete("/industries/:id", deleteIndustry);

export default router;
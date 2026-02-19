import express from "express";
import { createApproach, getAllApproach, getApproachById, deleteApproach, updateApproach } from "../controllers/ApproachControllers.js";

const router = express.Router();

router.post("/approach", createApproach);
router.get("/getapproach", getAllApproach);
router.get("/approach/:id", getApproachById);
router.delete("/approach/:id", deleteApproach);
router.put("/approach/:id", updateApproach);

export default router;
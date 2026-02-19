import express from "express";
import { createPrinciple, getAllPrinciples, getPrincipleById, updatePrinciple, deletePrinciple } from "../controllers/PrinciplesControllers.js";

const router = express.Router();

router.post("/create", createPrinciple);
router.get("/getAll", getAllPrinciples);
router.get("/:id", getPrincipleById);
router.put("/:id", updatePrinciple);
router.delete("/:id", deletePrinciple);

export default router;
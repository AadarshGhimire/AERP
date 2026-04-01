import express from "express";
import {createHeritage,getHeritageId,updateHeritage,deleteHeritage,getAllHeritage} from "../controllers/HeritageControllers.js";
const router = express.Router();

router.post("/create", createHeritage);
router.get("/getId/:id", getHeritageId);
router.put("/update/:id", updateHeritage);
router.delete("/delete/:id", deleteHeritage);
router.get("/AllHeritage", getAllHeritage);

export default router;
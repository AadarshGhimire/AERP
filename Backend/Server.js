import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/config/db.js"
import contactRoutes from "./src/routers/ContactRoutes.js";
import WhyChooseUsRoutes from "./src/routers/ChooseUsRoutes.js"
import IndustryRoutes from "./src/routers/IndustriesRoutes.js";
import ApproachRoutes from "./src/routers/ApproachRoutes.js";
import VisionRoutes from "./src/routers/VisionRoutes.js";

dotenv.config();
const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

app.use(express.json());
app.use("/api/industries", IndustryRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/whychooseus", WhyChooseUsRoutes);
app.use("/api/approach", ApproachRoutes);
app.use("/api/vision", VisionRoutes);

const PORT = process.env.PORT || 5000;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch((error) => {
  console.error("Failed to connect to the database:", error);
});

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/config/db.js"
import contactRoutes from "./src/routers/ContactRoutes.js";
import WhyChooseUsRoutes from "./src/routers/ChooseUsRoutes.js"
import IndustryRoutes from "./src/routers/IndustriesRoutes.js";
import ApproachRoutes from "./src/routers/ApproachRoutes.js";
import VisionRoutes from "./src/routers/VisionRoutes.js";
import courseRoutes from "./src/routers/courseRoutes.js";
import examRoutes from "./src/routers/examRoutes.js";
import uploadRoutes from "./src/routers/uploadRoutes.js";
import dashboardRoutes from "./src/routers/dashboardRoutes.js";
import uploadImageRoutes from "./src/routers/uploadImageRoutes.js";
import questionRoutes from "./src/routers/QuestionRoutes.js";
dotenv.config();
const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use("/api/industries", IndustryRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/whychooseus", WhyChooseUsRoutes);
app.use("/api/approach", ApproachRoutes);
app.use("/api/vision", VisionRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/exams", examRoutes);
app.use("/api/questions", questionRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/upload-image", uploadImageRoutes);

const PORT = process.env.PORT || 5000;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch((error) => {
  console.error("Failed to connect to the database:", error);
});

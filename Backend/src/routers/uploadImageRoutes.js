import express from "express";
import multer from "multer";

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// IMAGE UPLOAD ROUTE
router.post("/", upload.single("image"), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No image uploaded" });
    }

    res.json({
      imageUrl: `http://localhost:5000/uploads/${req.file.filename}`,
    });
  } catch (err) {
    res.status(500).json({ message: "Upload failed" });
  }
});

export default router;
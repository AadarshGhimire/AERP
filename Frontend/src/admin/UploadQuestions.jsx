import React, { useEffect, useState } from "react";
import api from "../services/api";
import { UploadCloud, FileText } from "lucide-react";

export default function UploadQuestions() {

  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [examId, setExamId] = useState("");
  const [exams, setExams] = useState([]);

  // 🔥 Fetch exams
  useEffect(() => {
    fetchExams();
  }, []);

  const fetchExams = async () => {
    try {
      const res = await api.get("/exams");
      setExams(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleFileChange = (selectedFile) => {
    if (!selectedFile) return;
    setFile(selectedFile);
  };

  const uploadFile = async () => {
    if (!file) return alert("Select file");
    if (!examId) return alert("Select exam");

    try {
      setLoading(true);
      
      const formData = new FormData();
      formData.append("file", file);
      formData.append("examId", examId); // 🔥 FIXED

      await api.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });

      alert("✅ Questions uploaded");

      setFile(null);
      setExamId("");

    } catch (err) {
      console.log(err);
      alert("❌ Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow rounded-xl">

      <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <UploadCloud /> Upload Questions
      </h1>

      {/* 🔥 SELECT EXAM */}
      <select
        value={examId}
        onChange={(e) => setExamId(e.target.value)}
        className="border p-2 w-full mb-4"
      >
        <option value="">Select Exam</option>
        {exams.map(e => (
          <option key={e._id} value={e._id}>
            {e.title}
          </option>
        ))}
      </select>

      {/* FILE INPUT */}
      <input
        type="file"
        onChange={(e) => handleFileChange(e.target.files[0])}
        className="mb-4"
      />

      <button
        onClick={uploadFile}
        className="bg-green-600 text-white px-4 py-2 rounded w-full"
      >
        Upload Questions
      </button>

    </div>
  );
}
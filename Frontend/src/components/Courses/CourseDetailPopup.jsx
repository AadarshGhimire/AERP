import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

export default function CourseDetailPopup({ course, close }) {
  const [exams, setExams] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleBackgroundClick = (e) => {
    if (e.target.id === "popup-bg") {
      close();
    }
  };

  // 🔥 Fetch exams
  useEffect(() => {
    if (course?._id) fetchExams();
  }, [course]);

  const fetchExams = async () => {
    try {
      setLoading(true);
      const res = await api.get(`/exams?courseId=${course._id}`);
      setExams(res.data || []);
    } catch (err) {
      console.error("Error fetching exams:", err);
    } finally {
      setLoading(false);
    }
  };

  if (!course) return null;

  return (
    <div
      id="popup-bg"
      onClick={handleBackgroundClick}
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
    >
      <div className="bg-white w-full max-w-3xl rounded-xl shadow-xl relative max-h-[90vh] overflow-y-auto">

        {/* Close */}
        <button
          onClick={close}
          className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
        >
          ✕
        </button>

        {/* Image */}
        <img
          src={course.image || "/image.png"}
          alt={course.title}
          className="w-full h-60 object-cover rounded-t-xl"
        />

        <div className="p-6">

          {/* Title */}
          <h2 className="text-2xl font-bold mb-2">
            {course.title}
          </h2>

          {/* Rating + Students + Price */}
          <div className="flex gap-5 text-gray-600 mb-3">
            <span>⭐ {course.rating || 4.5}</span>
            <span>👨‍🎓 {course.students || 0} students</span>
            <span>💰 {course.price || 0}</span>
          </div>

          {/* Category */}
          <p className="text-gray-600 mb-4">
            📚 {course.category || "Uncategorized"}
          </p>

          {/* Description */}
          <h3 className="text-lg font-semibold mb-1">
            Course Description
          </h3>

          <p className="text-gray-600 mb-4">
            {course.description || "No description available"}
          </p>

          {/* What you learn */}
          <h3 className="text-lg font-semibold mb-2">
            What You Will Learn
          </h3>

          <ul className="list-disc ml-5 text-gray-600 mb-4">
            {(course.learn || []).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          {/* Exams Section */}
          <h3 className="text-lg font-semibold mb-2">
            Available Exams
          </h3>

          {loading && <p>Loading exams...</p>}

          {!loading && exams.length === 0 && (
            <p className="text-gray-500">No exams available</p>
          )}

          <div className="space-y-3 mb-6">
            {exams.map((exam) => (
              <button
                key={exam._id}
                onClick={() => navigate(`/exam/${exam._id}`)}
                className="w-full border p-3 rounded-lg hover:bg-gray-100 text-left"
              >
                📝 {exam.title}
              </button>
            ))}
          </div>

          {/* Start Exam */}
          {exams.length > 0 && (
            <button
              onClick={() => navigate(`/exam/${exams[0]._id}`)}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
            >
              Start Mock Exam
            </button>
          )}

        </div>
      </div>
    </div>
  );
}
import React from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

export default function CourseCard({ course, onClick, onViewExam }) {
  const navigate = useNavigate();

 const handleViewExam = async (course) => {
  try {
    const res = await api.get(`/exams?courseId=${course._id}`);

    if (!res.data.length) {
      alert("No exam available");
      return;
    }

    const exam = res.data[0];

    navigate(`/exam/${exam._id}`);
  } catch (err) {
    console.log(err);
  }
};

  return (
    <div
      onClick={onClick}
      className="course-card group cursor-pointer hover:scale-105 transition"
    >
      <img
        src={course.image || "/image.png"}
        alt={course.title}
        className="course-card-image"
      />

      <div className="course-card-body">
        <h3 className="course-card-title">{course.title}</h3>

        <p className="course-card-questions">
          {course.questions || 0} Questions
        </p>

        <div className="course-card-footer">
          <span className="course-card-price">
            ${course.price || 0}
          </span>

          {/* ✅ FIXED */}
     <button
  className="course-card-btn"
  onClick={(e) => {
    e.stopPropagation();

    if (typeof onViewExam === "function") {
      onViewExam(course);
    }
  }}
>
  View Exam
</button>
        </div>
      </div>
    </div>
  );
}
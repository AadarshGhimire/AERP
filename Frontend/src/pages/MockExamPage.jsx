import React from "react";
import NavBar from "../components/Navigation/NavBar";
import MockExam from "../components/Exams/MockExam";
import Footer from '../components/Navigation/Footer.jsx'

export default function MockExamPage() {
  return (
    <div>
      <NavBar />
      <MockExam />
      <Footer />
    </div>
  );
}
import React from "react";
import NavBar from "../components/Navigation/NavBar";
import CourseGrid from "../components/Courses/CourseGrid";
import Footer from "../components/Navigation/Footer";
import Hero from "../components/Courses/Hero";

export default function CoursesPage() {
  return (
    <div className="animate-drop">

      <NavBar />
      <Hero />
      <CourseGrid />
      <Footer />

    </div>
  );
}
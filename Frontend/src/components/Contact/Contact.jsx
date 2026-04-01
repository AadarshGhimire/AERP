import React, { useState } from "react";
import axios from "axios";
import FadeInSection from "../Animation/FadeInSection.jsx"
export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    serviceInterest: "RaaS Subscription",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/contact", formData);

      alert(res.data.message || "Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        company: "",
        serviceInterest: "RaaS Subscription",
        message: "",
      });
    } catch (error) {
      console.log(error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <FadeInSection>
    <div className="bg-gray-50 min-h-screen">
      {/* HERO SECTION */}
      <section className="w-full h-[60vh] flex items-center justify-center bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-900 text-white">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            We'd love to hear from you. Let's discuss your project.
          </p>
        </div>
      </section>  

      {/* CONTACT CONTENT */}
      <section className="flex justify-center px-4 py-16">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* LEFT: CONTACT FORM */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>

            <form className="space-y-5" onSubmit={handleSubmit}>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company"
                  className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Service Interest
                </label>
                <select
                  name="serviceInterest"
                  value={formData.serviceInterest}
                  onChange={handleChange}
                  className="w-full border rounded-md px-4 py-2 bg-gray-100 focus:ring-2 focus:ring-blue-500"
                >
                  <option>RaaS Subscription</option>
                  <option>Consulting</option>
                  <option>Support</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your needs..."
                  className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
              >
                Send Message
              </button>

            </form>
          </div>

          {/* RIGHT: CONTACT INFO */}
          <div className="bg-white rounded-xl shadow-md p-8 h-fit">
            <h2 className="text-2xl font-semibold mb-6">
              Contact Information
            </h2>

            <div className="space-y-4 text-gray-700">
              <div>
                <p className="font-medium">Email</p>
                <p>info@aerpengineering.com</p>
              </div>

              <div>
                <p className="font-medium">Phone</p>
                <p>+1 (555) 123-4567</p>
              </div>

              <div>
                <p className="font-medium">Location</p>
                <p>Grand Prairie, Texas, US</p>
              </div>

              <div>
                <p className="font-medium">Business Hours</p>
                <p>Mon-Fri: 8:00 AM - 5:00 PM CST</p>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
    </FadeInSection>
  );
}


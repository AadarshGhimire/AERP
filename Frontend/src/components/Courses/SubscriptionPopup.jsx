import React from "react";

export default function SubscriptionPopup({ close }) {

  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center"
      onClick={close}
    >

      <div
        className="bg-white p-8 rounded-xl w-[650px] animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >

        <h2 className="text-2xl font-bold mb-6 text-center">
          Unlock Download Access
        </h2>

        <div className="grid grid-cols-2 gap-6">

          {/* Individual Course */}
          <div className="border p-6 rounded-lg transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:border-blue-500 cursor-pointer">

            <h3 className="font-semibold text-lg">
              Individual Course
            </h3>

            <p className="text-sm mt-2 text-gray-600">
              Download questions for this course only.
            </p>

            <p className="text-2xl font-bold mt-4">
              $19
            </p>

            <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition">
              Buy Plan
            </button>

          </div>

          {/* All Courses */}
          <div className="border p-6 rounded-lg transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:border-purple-500 cursor-pointer">

            <h3 className="font-semibold text-lg">
              All 12 Courses
            </h3>

            <p className="text-sm mt-2 text-gray-600">
              Download all questions from every course.
            </p>

            <p className="text-2xl font-bold mt-4">
              $99
            </p>

            <button className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition">
              Buy Full Access
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}
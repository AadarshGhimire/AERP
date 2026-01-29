import React from "react";

const books = [
  {
    id: 1,
    title: "Mastering ASQ Certified Reliability Engineer Exam",
    pages: 271,
    price: "$99.99",
  },
  {
    id: 2,
    title: "The Ultimate Guide for Mastering CMRP",
    pages: 389,
    price: "$99.99",
  },
  {
    id: 3,
    title: "Certified Energy Manager: Study Guide",
    pages: 500,
    price: "$999.99",
  },
];

export default function Store() {
  return (
    <div className="w-full px-4 py-6 md:px-12">
      
      {/* Search */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search books..."
          className="w-full max-w-xl rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
        />
      </div>

      {/* Tabs */}
      <div className="flex gap-8 border-b mb-8">
        <button className="flex items-center gap-2 pb-2 border-b-2 border-green-600 text-green-700 font-medium">
          📘 Bookstore
        </button>
        <button className="flex items-center gap-2 pb-2 text-gray-500">
          🛒 App Store
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {books.map((book) => (
          <div
            key={book.id}
            className="rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition"
          >
            {/* Pages badge */}
            <div className="mb-3">
              <span className="inline-block bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full">
                {book.pages} pages
              </span>
            </div>

            {/* Title */}
            <h2 className="text-lg font-semibold mb-3 leading-snug">
              {book.title}
            </h2>

            {/* Price */}
            <p className="text-2xl font-bold mb-6">{book.price}</p>

            {/* Buttons */}
            <div className="flex gap-3">
              <button className="flex-1 rounded-lg bg-gray-100 py-2 text-gray-700 hover:bg-gray-200">
                👁 Preview
              </button>
              <button className="flex-1 rounded-lg bg-green-700 py-2 text-white hover:bg-green-800">
                🛒 Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

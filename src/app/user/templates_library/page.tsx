"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Templates_Library() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Marketing",
    "Promotions",
    "Notifications",
    "Updates",
    "Reminders",
  ];

  const templates = [
    { id: 1, category: "Marketing", title: "Marketing Campaign", content: "Boost your sales with this engaging WhatsApp campaign template." },
    { id: 2, category: "Promotions", title: "Limited Time Offer", content: "Notify your users about limited-time discounts and offers." },
    { id: 3, category: "Notifications", title: "New Feature Alert", content: "Inform your users about new features or product updates." },
    { id: 4, category: "Updates", title: "System Maintenance", content: "Keep your users informed about scheduled system maintenance." },
    { id: 5, category: "Reminders", title: "Event Reminder", content: "Send timely reminders for events, appointments, or tasks." },
  ];

  const filteredTemplates =
    selectedCategory === "All"
      ? templates
      : templates.filter((template) => template.category === selectedCategory);

  return (
    <div className="contact-form">
      <div className="pt-4 px-4">
        <h1 className="text-2xl font-bold tracking-tight mb-2">Templates Library</h1>
        <p className="text-wrap text-lg">
          Effortlessly create, manage, and broadcast WhatsApp message templates to keep your <span className="text-green-700">users engaged.</span>
        </p>
      </div>

      <div className="flex px-4 py-6 space-x-4 overflow-x-auto scrollbar-hide">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              selectedCategory === category
                ? "bg-green-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            } transition duration-200`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="flex px-4 py-4 justify-between">
        <form>
          <div className="flex bg-gray-100 border rounded-xl transition duration-200">
            <img
              src="/misc/search.svg"
              alt="search"
              className="ml-2 h-5 w-5 self-center"
            />
            <input
              type="search"
              className="flex-1 px-4 py-2 bg-gray-100 outline-none rounded-xl transition duration-200"
              placeholder="Search templates..."
            />
          </div>
        </form>
        <div className="mr-10">
          <Link
            href="/add-template"
            className="bg-green-600 text-white rounded-lg px-6 py-4 shadow-xl hover:opacity-90"
          >
            Create WhatsApp Template
          </Link>
        </div>
      </div>


<div className="w-full bg-white rounded-2xl p-6">
  {filteredTemplates.length > 0 ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredTemplates.map((template) => (
        <div
          key={template.id}
          className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          {/* Card Header */}
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-800">
              {template.title}
            </h3>
            {/* Category Badge */}
            <span
              className={`text-xs px-2 py-1 rounded-full ${
                template.category === "Marketing"
                  ? "bg-green-100 text-green-600"
                  : template.category === "Promotions"
                  ? "bg-blue-100 text-blue-600"
                  : template.category === "Notifications"
                  ? "bg-yellow-100 text-yellow-600"
                  : template.category === "Updates"
                  ? "bg-purple-100 text-purple-600"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {template.category}
            </span>
          </div>

          <p className="text-gray-700 text-sm mt-2 mb-4">{template.content}</p>

          <button
            className="bg-green-600 text-white text-sm px-4 py-2 rounded-md shadow-md hover:opacity-90 transition-opacity duration-200"
            onClick={() => alert(`Using template: ${template.title}`)}
          >
            Use Template
          </button>
        </div>
      ))}
    </div>
  ) : (
    <p className="text-gray-500 text-center">No templates found for the selected category.</p>
  )}
</div>

    </div>
  );
}

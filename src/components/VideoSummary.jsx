import { Copy, File, FileText } from "lucide-react";
import React, { useState } from "react";

const VideoSummary = () => {
  const [activeTab, setActiveTab] = useState("summary");

  const keyPoints = [
    {
      time: "00:45",
      text: "Introduction to AI concepts and basic terminology",
    },
    { time: "03:20", text: "Different types of machine learning algorithms" },
    { time: "07:15", text: "Real-world applications and examples" },
  ];

  return (
    <div className="container mx-auto mt-10 flex flex-col md:flex-row gap-6 p-4 justify-baseline items-start">
      {/* Left Video Card */}
      <div
        className="flex-1 rounded-xl overflow-hidden shadow-md"
        style={{ maxWidth: "500px" }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/75/Netflix_icon.svg"
          alt="Video Thumbnail"
          className="w-full h-48 object-contain bg-black p-6"
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold">
            Understanding Artificial Intelligence Basics
          </h2>
          <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
            <span>📺 Tech Learning Channel</span>
            <span>• 15:30</span>
            <span>• Published Jan 15, 2024</span>
          </div>
        </div>
      </div>

      {/* Right: Summary Box */}
      <div className="flex-1 bg-white shadow-md rounded-xl p-6">
        {/* Tabs */}
        <div className="flex gap-4 border-b border-gray-200 dark:border-gray-700 mb-4">
          <button
            onClick={() => setActiveTab("summary")}
            className={`pb-2 font-medium ${
              activeTab === "summary"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-700"
            }`}
          >
            Summary
          </button>
          <button
            onClick={() => setActiveTab("notes")}
            className={`pb-2 font-medium ${
              activeTab === "notes"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500"
            }`}
          >
            Detailed Notes
          </button>
        </div>

        {/* Summary Content */}
        {activeTab === "summary" && (
          <div>
            <h3 className="font-semibold mb-2">Key Points</h3>
            <ul className="space-y-2 text-sm">
              {keyPoints.map((point, index) => (
                <li key={index}>
                  <a
                    href={`#t=${point.time}`}
                    className="text-blue-600 font-medium hover:underline mr-2"
                  >
                    {point.time}
                  </a>
                  <span className="text-black dark:text-gray-700">
                    {point.text}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex gap-4">
              <button className="flex items-center gap-1 px-4 py-2 border rounded-md text-sm hover:bg-gray-100">
                <FileText size={16} /> PDF
              </button>
              <button className="flex items-center gap-1 px-4 py-2 border rounded-md text-sm hover:bg-gray-100">
                <File size={16} /> Word
              </button>
              <button className="flex items-center gap-1 px-4 py-2 border rounded-md text-sm hover:bg-gray-100">
                <Copy size={16} /> Copy Text
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoSummary;

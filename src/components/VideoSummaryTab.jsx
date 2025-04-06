import { Copy, Download, Share2 } from "lucide-react";
import React, { useState } from "react";

const VideoSummaryTab = () => {
  const [tab, setTab] = useState("summary");

  const tabs = ["summary", "notes", "keypoints"];

  const tabLabels = {
    summary: "Summary",
    notes: "Notes",
    keypoints: "Key Points",
  };

  const getContent = () => {
    switch (tab) {
      case "summary":
        return "Generated summary content will appear here...";
      case "notes":
        return "Detailed notes will be shown here...";
      case "keypoints":
        return "Key points will be displayed here...";
      default:
        return "";
    }
  };

  return (
    <div className="container mx-auto p-7 flex flex-col md:flex-row gap-6 bg-[#F8FAFC]">
      {/* Left: Video Card */}
      <div className="flex-1 bg-white rounded-xl shadow p-5">
        <div className="aspect-video bg-gray-100 flex items-center justify-center rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M10 8l6 4-6 4V8z" />
          </svg>
        </div>
        <div className="mt-4">
          <h2 className="text-md font-semibold text-gray-800">Video Title</h2>
          <p className="text-sm text-gray-500">Video description and details</p>
        </div>
      </div>

      {/* Right: Tab Section */}
      <div className="flex-1 bg-white rounded-xl shadow p-4">
        {/* Tabs */}
        <div className="flex gap-6 border-b pb-2 mb-4">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`pb-2 font-medium transition-all ${
                tab === t
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-blue-500"
              }`}
            >
              {tabLabels[t]}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="text-sm text-gray-700 min-h-[20px]">{getContent()}</div>

        {/* Actions */}
        <div className="mt-6 flex gap-4">
          <button className="flex items-center gap-1 px-4 py-2 border rounded-md text-sm hover:bg-gray-100">
            <Copy size={16} /> Copy
          </button>
          <button className="flex items-center gap-1 px-4 py-2 border rounded-md text-sm hover:bg-gray-100">
            <Download size={16} /> Download
          </button>
          <button className="flex items-center gap-1 px-4 py-2 border rounded-md text-sm hover:bg-gray-100">
            <Share2 size={16} /> Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoSummaryTab;

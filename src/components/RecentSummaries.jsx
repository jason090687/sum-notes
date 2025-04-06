import React from "react";

const summaries = [
  {
    id: 1,
    title: "Video Title Example 1",
    description: "Brief summary preview of the video content...",
    date: "Generated 2 days ago",
  },
  {
    id: 2,
    title: "Video Title Example 2",
    description: "Brief summary preview of the video content...",
    date: "Generated 2 days ago",
  },
  {
    id: 3,
    title: "Video Title Example 3",
    description: "Brief summary preview of the video content...",
    date: "Generated 2 days ago",
  },
];

const RecentSummaries = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">
        Recent Summaries
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {summaries.map((summary) => (
          <div
            key={summary.id}
            className="bg-white rounded-xl shadow-sm overflow-hidden"
          >
            <div className="aspect-video bg-gray-100 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M10 8l6 4-6 4V8z" />
              </svg>
            </div>
            <div className="p-4">
              <h3 className="font-medium text-gray-800">{summary.title}</h3>
              <p className="text-sm text-gray-500 mb-2">
                {summary.description}
              </p>
              <div className="flex justify-between text-sm text-gray-400">
                <span>{summary.date}</span>
                <a
                  href="#"
                  className="text-blue-600 font-medium hover:underline"
                >
                  View Full Summary
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentSummaries;

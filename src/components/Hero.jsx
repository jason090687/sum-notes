import React from "react";
import Vimeo from "../assets/vimeo.png";
import Youtube from "../assets/youtube.png";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] bg-gradient-to-r bg-[#F8FAFC] text-black overflow-hidden">
      <h1 className="text-5xl font-semibold mb-4">
        Transform Videos into Smart Notes
      </h1>
      <p className="text-lg mb-8">
        Get instant summaries and organized notes from any video URL
      </p>
      <div className="mt-8 gap-10 space-x-2">
        <input
          type="text"
          placeholder="Enter video URL"
          className="px-4 py-2 rounded-l-md border-none focus:outline-none text-gray-800 bg-white w-full rounded-md"
          style={{ width: "600px" }}
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
          Generate
        </button>
      </div>

      <div className="mt-8 flex items-center jusbtify-center">
        <div className="gap-2 flex items-center">
          <p className="text-sm text-black pr-2">Supports</p>
          <img
            src={Youtube}
            alt="YouTube"
            className="inline-block mx"
            width={15}
            height={15}
          />
          <img
            src={Vimeo}
            alt="Vimeo"
            className="inline-block mx-2"
            width={15}
            height={15}
          />
          <p className="text-sm text-black pr-2">and other popular platforms</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

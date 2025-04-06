import React from "react";

const Pricing = () => {
  return (
    <section className="flex flex-col items-center justify-center h-[35vh] bg-gradient-to-r from-blue-600 to-blue-900 text-black overflow-hidden">
      <div className="flex items-center justify-center w-full flex-col">
        <h1 className="text-4xl font-bold text-white">
          Start Generating Smart Notes Today
        </h1>
        <p className="text-lg text-white mt-2 font-light">
          Join thousands of users who are already saving time with NoteGenius
        </p>
      </div>

      <div className="mt-8 flex items-center justify-center gap-6">
        <button className="bg-gray-200 text-gray-700 px-5 py-2 rounded-md hover:bg-gray-300">
          Try for Free
        </button>
        <button className=" text-white px-5 py-2 hover:bg-blue-600 rounded-md border">
          See Pricing
        </button>
      </div>
    </section>
  );
};

export default Pricing;

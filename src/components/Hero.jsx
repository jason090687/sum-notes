import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import Vimeo from "../assets/vimeo.png";
import Youtube from "../assets/youtube.png";

const Hero = () => {
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const inputSectionRef = useRef(null);
  const supportRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({
      defaults: { duration: 0.8, ease: "power3.out" },
    });

    timeline
      .fromTo(titleRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1 })
      .fromTo(
        descRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1 },
        "-=0.5"
      )
      .fromTo(
        inputSectionRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1 },
        "-=0.5"
      )
      .fromTo(
        supportRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1 },
        "-=0.3"
      );
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-[70vh] bg-gradient-to-r bg-[#F8FAFC] text-black overflow-hidden">
      <h1 ref={titleRef} className="text-5xl font-semibold mb-4">
        Transform Videos into Smart Notes
      </h1>
      <p ref={descRef} className="text-lg mb-8">
        Get instant summaries and organized notes from any video URL
      </p>
      <div ref={inputSectionRef} className="mt-8 gap-10 space-x-2">
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

      <div ref={supportRef} className="mt-8 flex items-center jusbtify-center">
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

import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const Pricing = () => {
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const buttonsRef = useRef(null);

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
        buttonsRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1 },
        "-=0.3"
      );
  }, []);

  return (
    <section className="flex flex-col items-center justify-center h-[35vh] bg-gradient-to-r from-blue-600 to-blue-900 text-black overflow-hidden">
      <div className="flex items-center justify-center w-full flex-col">
        <h1 ref={titleRef} className="text-4xl font-bold text-white">
          Start Generating Smart Notes Today
        </h1>
        <p ref={descRef} className="text-lg text-white mt-2 font-light">
          Join thousands of users who are already saving time with NoteGenius
        </p>
      </div>

      <div
        ref={buttonsRef}
        className="mt-8 flex items-center justify-center gap-6"
      >
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

import React from "react";
import Clock from "../assets/clock1.png";
import Language from "../assets/language.png";
import Star from "../assets/star.png";
import Card from "./Card";

const Header = () => {
  return (
    <section className="flex flex-row items-center justify-between h-[40vh] container mx-auto">
      <Card className="w-[450px] h-[225px] bg-white shadow-2xl">
        <div className="flex flex-col justify-center h-full gap-2">
          <img src={Star} alt="brain" width={60} height={60} />
          <h1 className="text-2xl font-normal">Smart Summarization</h1>

          <span className="text-sm text-gray-600 mt-4">
            Advanced AI technology that captures key points and main ideas from
            any video content
          </span>
        </div>
      </Card>
      <Card className="w-[450px] h-[225px] bg-white shadow-2xl">
        <div className="flex flex-col justify-center h-full gap-2">
          <img src={Clock} alt="brain" width={60} height={60} />
          <h1 className="text-2xl font-normal">Time-Stamped Notes</h1>

          <span className="text-sm text-gray-600 mt-4">
            Every note is linked to the exact moment in the video for easy
            reference
          </span>
        </div>
      </Card>
      <Card className="w-[450px] h-[225px] bg-white shadow-2xl">
        <div className="flex flex-col justify-center h-full gap-2">
          <img src={Language} alt="brain" width={60} height={60} />
          <h1 className="text-2xl font-normal">Multiple Languages</h1>

          <span className="text-sm text-gray-600 mt-4">
            Generate summaries in various languages to reach a global audience
          </span>
        </div>
      </Card>
    </section>
  );
};

export default Header;

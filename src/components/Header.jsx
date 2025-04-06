import axios from "axios";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useState } from "react";
import Clock from "../assets/clock1.png";
import Language from "../assets/language.png";
import Star from "../assets/star.png";
import Card from "./Card";

const Header = () => {
  const cardsRef = useRef([]);
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(true);

  const icons = {
    "Smart Summarization": Star,
    "Time-Stamped Notes": Clock,
    "Multiple Languages": Language,
  };

  useEffect(() => {
    const fetchFeatures = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/features/",
          {
            withCredentials: true,
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );
        setFeatures(response.data);
      } catch (error) {
        console.error("Error fetching features:", error.message);
        setFeatures([]); // Set empty array as fallback
      } finally {
        setLoading(false);
      }
    };

    fetchFeatures();
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      cardsRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current[0],
          start: "top bottom-=100",
          end: "bottom center",
        },
      }
    );
  }, [features]);

  if (loading) {
    return (
      <div className="container mx-auto h-[40vh] flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <section className="flex flex-row items-center justify-between h-[40vh] container mx-auto">
      {features.map((feature, index) => (
        <Card
          key={feature.id || index}
          ref={(el) => (cardsRef.current[index] = el)}
          className="w-[450px] h-[225px] bg-white shadow-2xl"
        >
          <div className="flex flex-col justify-center h-full gap-2">
            <img
              src={icons[feature.title] || Star}
              alt={feature.title}
              width={60}
              height={60}
            />
            <h1 className="text-2xl font-normal">{feature.title}</h1>
            <span className="text-sm text-gray-600 mt-4">
              {feature.description}
            </span>
          </div>
        </Card>
      ))}
    </section>
  );
};

export default Header;

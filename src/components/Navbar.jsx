import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const Navbar = () => {
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef([]);
  const buttonsRef = useRef([]);

  // Define the navigation items
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const timeline = gsap.timeline({
      defaults: { duration: 0.5, ease: "power2.out" },
    });

    timeline
      .fromTo(navRef.current, { y: -100, opacity: 0 }, { y: 0, opacity: 1 })
      .fromTo(
        logoRef.current,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1 },
        "-=0.3"
      )
      .fromTo(
        linksRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1 },
        "-=0.3"
      )
      .fromTo(
        buttonsRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1 },
        "-=0.3"
      );
  }, []);

  return (
    <nav
      ref={navRef}
      className="bg-white fixed top-0 w-full shadow-md p-5 z-10"
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center justify-between space-x-4 gap-2">
          <div>
            <h1 ref={logoRef} className="text-2xl font-bold text-gray-600">
              NoteGenuis
            </h1>
          </div>

          <div className="flex space-x-4">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                ref={(el) => (linksRef.current[index] = el)}
                href={item.path}
                className="text-gray-600 hover:text-gray-800 font-semibold"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button
            ref={(el) => (buttonsRef.current[0] = el)}
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
          >
            Log In
          </button>
          <button
            ref={(el) => (buttonsRef.current[1] = el)}
            className="bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 rounded-md"
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

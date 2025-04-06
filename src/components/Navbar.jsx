import React from "react";

const Navbar = () => {
  // Define the navigation items
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white fixed top-0 w-full shadow-md p-5 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center justify-between space-x-4 gap-2">
          <div>
            <h1 className="text-2xl font-bold text-gray-600">NoteGenuis</h1>
          </div>

          <div className="flex space-x-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="text-gray-600 hover:text-gray-800 font-semibold"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300">
            Log In
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 rounded-md">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

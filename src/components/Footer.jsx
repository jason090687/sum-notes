import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1E293B] text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        <div>
          <h2 className="text-2xl font-bold mb-4">NoteGenius</h2>
          <p className="text-sm">
            Making video content more accessible and actionable.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Product</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#features" className="hover:underline">
                Features
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:underline">
                Pricing
              </a>
            </li>
            <li>
              <a href="#use-cases" className="hover:underline">
                Use Cases
              </a>
            </li>
            <li>
              <a href="#updates" className="hover:underline">
                Updates
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#documentation" className="hover:underline">
                Documentation
              </a>
            </li>
            <li>
              <a href="#guides" className="hover:underline">
                Guides
              </a>
            </li>
            <li>
              <a href="#help-center" className="hover:underline">
                Help Center
              </a>
            </li>
            <li>
              <a href="#api" className="hover:underline">
                API
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#about-us" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#blog" className="hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="#careers" className="hover:underline">
                Careers
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a href="#privacy-policy" className="hover:underline">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border mt-7"></div>

      <div className="mt-10 text-center text-sm text-gray-400 flex items-center overflow-hidden w-full">
        <p className="w-full justify-start flex items-center ml-5">
          © {new Date().getFullYear()} NoteGenius. All rights reserved.
        </p>
        <div className="flex justify-end space-x-4 flex-row w-full mr-5">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener northerner"
            className="text-gray-400 hover:text-white"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

"use client";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="border-t border-white/30 py-6 ">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between text-white px-6">
        {/* Copyright */}
        <p className="text-sm text-neutral-300">© {new Date().getFullYear()} Hasan. All rights reserved.</p>

        {/* Social Icons */}
        <div className="flex space-x-6 mt-4 sm:mt-0">
          <a
            href="https://github.com/username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-300 hover:text-white transition">
            <FaGithub size={22} />
          </a>
          <a
            href="https://linkedin.com/in/username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-300 hover:text-white transition">
            <FaLinkedin size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
};

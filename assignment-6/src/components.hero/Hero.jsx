import React from 'react';
import { FaPlay } from 'react-icons/fa';
import heroImg from '../assets/products/banner.png'; // swap with your hero image

const Hero = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Left */}
        <div className="flex-1 space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-1 text-sm text-purple-700">
            <span className="h-2 w-2 rounded-full bg-purple-600"></span>
            New: AI-Powered Tools Available
          </span>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
            Supercharge Your Digital Workflow
          </h1>

          <p className="max-w-md text-gray-500">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="btn border-0 rounded-full text-white bg-linear-to-r from-[#4F39F6] to-[#9F62F2]">
              Explore Products
            </button>
            <button className="btn btn-outline rounded-full border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white">
              <FaPlay className="text-xs" /> Watch Demo
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="flex-1">
          <img src={heroImg} alt="Hero" className="w-full rounded-xl object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
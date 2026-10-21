import React from 'react';
import { FaPlay } from 'react-icons/fa';
import heroImg from '../assets/products/banner.png'; 

const Hero = () => {
  return (
   <>
      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-1 text-sm text-purple-700">
              <span className="h-2 w-2 rounded-full bg-purple-600"></span>
              New: AI-Powered Tools Available
            </span>
            <h1 className="text-4xl md:text-[76px] font-extrabold leading-tight text-[#101727]">
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
          <div className="flex-1">
            <img src={heroImg} alt="Hero" className="w-full rounded-xl object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-linear-to-r from-[#4F39F6] to-[#9F62F2] text-white">
        <div className="container mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 text-center">
          <div className="space-y-2">
            <h3 className="text-4xl md:text-5xl font-bold">50K+</h3>
            <p className="text-white/80">Active Users</p>
          </div>
          <div className="space-y-2 md:border-l md:border-white/30">
            <h3 className="text-4xl md:text-5xl font-bold">200+</h3>
            <p className="text-white/80">Premium Tools</p>
          </div>
          <div className="space-y-2 md:border-l md:border-white/30">
            <h3 className="text-4xl md:text-5xl font-bold">4.9</h3>
            <p className="text-white/80">Rating</p>
          </div>
        </div>
      </section>
    </>
  );
};


export default Hero;
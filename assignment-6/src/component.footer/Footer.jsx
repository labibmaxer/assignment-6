import React from 'react';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="container mx-auto px-4 pt-14 pb-6">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10">
          <div className="col-span-2 space-y-3">
            <h2 className="text-3xl font-bold">DigiTools</h2>
            <p className="max-w-xs text-sm text-gray-400">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Product</h3>
            <ul className="space-y-2 text-sm text-gray-400">
                 <li><a href="" className="hover:text-white">Features</a></li>
                   <li><a href="" className="hover:text-white">Pricing</a></li>
                        <li><a href="" className="hover:text-white">Templates</a></li>
                            <li><a href="" className="hover:text-white">Integrations</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="" className="hover:text-white">About</a></li>
               <li><a href="" className="hover:text-white">Blog</a></li>
                <li><a href="" className="hover:text-white">Careers</a></li>
                <li><a href="" className="hover:text-white">Press</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="" className="hover:text-white">Documentation</a></li>
                <li><a href="" className="hover:text-white">Help Center</a></li>
                   <li><a href="" className="hover:text-white">Community</a></li>
                      <li><a href="" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Social Links</h3>
            <div className="flex gap-3">
              <a href="" className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
                <FaInstagram />
              </a>
              <a href="" className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
                <FaFacebookF />
              </a>
              <a href="" className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
                <FaXTwitter />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-gray-400 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Digitools. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="" className="hover:text-white">Privacy Policy</a>
            <a href="" className="hover:text-white">Terms of Service</a>
            <a href="" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import logo from "../assets/products/DigiTools.png"
import { IoCartOutline } from "react-icons/io5";
const Nav = () => {
    return (
        <div className='container mx-auto max-h-[2px]'>
           <div className="max-lg:collapse bg-base-200 lg:mb-48 shadow-sm   rounded-md">
  <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
  <label htmlFor="navbar-1-toggle" className="fixed inset-0 hidden max-lg:peer-checked:block"></label>
  <div className="collapse-title navbar">
    <div className="navbar-start">
      <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden">
        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
     <img src={logo} alt="DigiTools" />
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1 font-semibold text-[16px]">
        <li><button>Products</button></li>
       
        <li><button>Features</button></li>
         <li><button>Pricing</button></li>
          <li><button>Testimonials</button></li>
           <li><button>FAQ</button></li>
            {/* <li><button>Item 3</button></li> */}
      </ul>
    </div>
    <div className="navbar-end gap-4">
      {/* <input type="text" placeholder="Search" className="input w-64 lg:w-auto" /> */}
      <button className="font-semibold text-[16px] flex items-center"><IoCartOutline />Login</button> 
      <button className="btn btn-active text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-4xl ">Get Started</button>
    </div>
  </div>


</div>
        </div>
    );
};

export default Nav;
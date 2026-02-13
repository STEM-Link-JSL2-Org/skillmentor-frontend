//import { useState } from "react";
import LogoImg from "../assets/logo.png";
import { MdMenu } from "react-icons/md";

export default function NavBar() {
  //const [open, setOpen] = useState(false);
  return (
    <nav className="px-4 sm:px-8 lg:px-10 bg-black w-full fixed top-0 ">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 ">
        
        {/* Left Section */}
        <div className="flex items-center gap-15">
          
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <img src={LogoImg} className="w-14" />
            <p className="text-xl font-bold text-white">SkillMentor</p>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6 font-normal text-white">
            <a href="#" className="hover:text-amber-200 transition">
              Tutors
            </a>
            <a href="#" className="hover:text-amber-200 transition">
              About Us
            </a>
            <a href="#" className="hover:text-amber-200 transition">
              Resources
            </a>
          </div>
        </div>

        {/* Right Section buttons*/}
        <div className="hidden md:block">
        <div className="flex items-center font-semibold gap-5">
          <button className="text-gray-300 hover:text-black rounded-md px-5 py-2 hover:bg-amber-50 transition cursor-pointer">
            Login
          </button>

          <button className="bg-yellow-400 text-black font-sans px-5 py-2 rounded-md hover:bg-yellow-300 cursor-pointer">
            Sign up
          </button>
        </div>
        </div>
        
        {/* Mobile Hamburger section */}
        <div className="md:hidden">
          <MdMenu className="text-4xl text-amber-500"/>
        </div>
      </div>
    </nav>
  );
}

"use client";
import { IoIosMenu } from "react-icons/io";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaTimes } from "react-icons/fa";
import Link from "next/link";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const togglenav = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="sticky top-0 w-full z-20  flex justify-between items-center   bg-black text-white border-b-2 border-white">
       <h1 className="text-3xl font-bold bg-[#f65353] rounded-full p-2">BR</h1>
       <div className="sm:hidden">
           <button onClick={()=> setIsOpen(!isOpen)} className="text-2xl " >
             {isOpen ? <FaTimes/> : <IoIosMenu/>}

           </button>
             
           
       </div>
       <ul className="hidden md:flex md:space-x-8 md:gap-6 mr-7">
       <li><Link href={"#about"} className="hover:text-[#f65353]">Home</Link></li>
       <li><Link href={"/"} className="hover:text-[#f65353]">About</Link></li>
       <li><Link href={"/"} className="hover:text-[#f65353]">Projects</Link></li>
       <li><Link href={"/"} className="hover:text-[#f65353]">Skills</Link></li>
       <li><Link href={"/"} className="hover:text-[#f65353]">Contact</Link></li>


      </ul>
      
       {isOpen && (
        <div className="fixed inset-0 z-10 flex items-center justify-center sm:hidden  ">
          <div className="w-3/4 h-full p-6 pt-6 shadow-lg relative top-9 left-8 bg-[#f65353]">
             
             <ul className="mt-[20%] space-y-6  ">
              <li><Link href={"/"} className="" >Home</Link></li>
              <li><Link href={"/"} className="hover:text-[#f65353]" >About</Link></li>
              <li><Link href={"/"} className="hover:text-[#f65353]" >Projects</Link></li>
              <li><Link href={"/"} className="hover:text-[#f65353]" >Skills</Link></li>
              <li><Link href={"/"} className="hover:text-[#f65353]" >Contact</Link></li>
             </ul>
          </div>
        </div>
       )
       }
    </nav>
  );
};

export default Navbar;

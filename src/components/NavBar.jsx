import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
      <div className="w-[90%] lg:w-[80%] mx-auto bg-white mt-6 md:mt-12">
         {/* Menu Bar */}
         <nav className="flex justify-between items-center py-4 px-4 lg:px-12">
         <Link to="/">
            <h1 className="text-xl md:text-2xl font-bold text-[#071226]">CarRental</h1>
          </Link>
           {/* Hamburger Icon */}
           <div className="md:hidden text-xl cursor-pointer z-50" onClick={toggleMenu}>
             {menuOpen ? <FaTimes className="text-[#071226]" /> : <FaBars className="text-[#071226]" />}
           </div>
           {/* Desktop Menu */}
           <ul
             className="md:flex gap-6 text-sm font-medium text-[#071226] hidden"
           >
             <Link to="/">
                <li className="cursor-pointer hover:text-[#3805F2]">Home</li>
             </Link>
             <Link to="/featured-cars">
                <li className="cursor-pointer hover:text-[#3805F2]">Featured Cars</li>
            </Link>
             <li className="cursor-pointer hover:text-[#3805F2]">Services</li>
             <li className="cursor-pointer hover:text-[#3805F2]">Contact</li>
           </ul>
           {/* Mobile Menu */}
           {menuOpen && (
             <ul className="absolute top-16  w-[85%] bg-white shadow-md text-center flex flex-col gap-4 py-6 text-sm font-medium text-[#071226] md:hidden">
               <Link to="/">
                  <li className="cursor-pointer hover:text-[#3805F2]" onClick={closeMenu}>Home</li>
                </Link>
               <Link to="/featured-cars">
                  <li className="cursor-pointer hover:text-[#3805F2]" onClick={closeMenu}>Featured Cars</li>
               </Link>
               <li className="cursor-pointer hover:text-[#3805F2]">Services</li>
               <li className="cursor-pointer hover:text-[#3805F2]">Contact</li>
             </ul>
           )}
         </nav>
     </div>
  )
}

export default NavBar
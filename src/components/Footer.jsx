import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-[90%] md:w-[80%] mx-auto bg-[#fff] text-[#f2f2f2] pt-0 pb-8 px-4 md:px-10">
      <div className="bg-[#071226] rounded-xl p-8 md:p-12">
        {/* First Row */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 text-center md:text-left">
          <h2 className="text-2xl md:text-5xl font-semibold mb-6 md:mb-0">
            Find Your Perfect Ride with Us!
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-2 bg-[#071226] text-[#f2f2f2] font-semibold border border-[#f2f2f2] rounded-lg hover:bg-[#3805F2] hover:border-[#3805F2]">
              Book Now
            </button>
            <button className="px-6 py-2 bg-[#3805F2] text-[#f2f2f2] font-semibold rounded-lg hover:bg-[#f2f2f2] hover:text-[#3805F2]">
              Learn More
            </button>
          </div>
        </div>
        <div className="border-t border-[#f2f2f2] my-4 opacity-40"></div>

        {/* Second Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pt-6 text-center sm:text-left">
          {/* Logo and Menu Items */}
          <div className="flex flex-col items-center sm:items-start gap-4">
            <h1 className="text-2xl md:text-3xl font-bold text-[#f2f2f2]">CarRental</h1>
            <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-sm">
              <a href="#" className="hover:text-[#3805F2]">Home</a>
              <a href="#" className="hover:text-[#3805F2]">Services</a>
              <a href="#" className="hover:text-[#3805F2]">Featured Cars</a>
              <a href="#" className="hover:text-[#3805F2]">Contact</a>
              <a href="#" className="hover:text-[#3805F2]">FAQs</a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center sm:items-start gap-4 text-sm">
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-lg" />
              <span>123 CarRental Street, City, Country</span>
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-lg" />
              <span>+1 (123) 456-7890</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-lg" />
              <span>info@carrental.com</span>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center sm:justify-start gap-6 text-2xl">
            <a href="#" className="hover:text-[#3805F2]">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-[#3805F2]">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-[#3805F2]">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

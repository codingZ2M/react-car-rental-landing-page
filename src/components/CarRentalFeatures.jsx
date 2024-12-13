import React from "react";
import { FaCity, FaCarAlt, FaCreditCard, FaBook } from "react-icons/fa";

const CarRentalFeatures = () => {
  return (
    <div className="w-[90%] md:w-[80%] mx-auto bg-white pt-20 px-4 text-[#071226]">
      {/* Features Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 pb-10">
        <Feature
          icon={<FaCity />}
          title="Operating in Multiple Cities"
          description="We provide services across various major cities, ensuring you have access to a vehicle wherever you travel."
        />
        <Feature
          icon={<FaBook />}
          title="Easy Online Booking"
          description="Book your car within minutes through our user-friendly online platform, designed for your convenience."
        />
        <Feature
          icon={<FaCarAlt />}
          title="Variety of Car Brands"
          description="Choose from a wide range of car brands to find the perfect vehicle for your needs and preferences."
        />
        <Feature
          icon={<FaCreditCard />}
          title="Online Payment"
          description="Make secure and hassle-free payments online with multiple payment options available for your ease."
        />
      </div>

      {/* Additional Content */}
      <div className="mt-2 text-center">
        <h2 className="text-xl md:text-2xl font-bold mb-4">Why Choose Our Services?</h2>
        <p className="text-sm md:text-base text-[#071226] opacity-75 mb-6">
          Experience the best car rental service with unparalleled convenience, reliability, and professional support. 
          Whether you need a vehicle for a day or a week, we’ve got you covered.
        </p>
        <button className="px-8 py-2 bg-[#3805F2] text-white font-semibold rounded-md hover:bg-[#071226] transition duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
};

const Feature = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center">
    <div className="text-4xl mb-4 text-[#3805F2]">{icon}</div>
    <h3 className="text-lg md:text-xl font-semibold mb-2">{title}</h3>
    <p className="text-sm md:text-base text-[#071226] opacity-75">{description}</p>
  </div>
);

export default CarRentalFeatures;
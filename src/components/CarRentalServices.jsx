import React from "react";
import carRentalServicesData from "../../data/carServices";

const CarRentalServices = () => {

  return (
    <div className="w-[90%] md:w-[85%] lg:w-[80%] mx-auto bg-[#fff] py-20 px-4 md:px-10">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-[#071226] mb-8">
        Our Car Rental Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {carRentalServicesData.map((service, index) => (
          <div
            key={index}
            className="bg-[#f2f2f2] p-4 md:p-6 flex flex-col items-center rounded-lg"
          >
            <img
              src={service.image}
              alt={service.type}
              className="w-full h-auto object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-[#071226] mb-2">
              {service.type}
            </h3>
            <p className="text-sm md:text-base text-[#071226] mb-4 text-center opacity-75">
              {service.description}
            </p>
            <button className="px-4 py-2 bg-[#071226] text-white font-semibold rounded-lg hover:bg-[#3805F2]">
              Know More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarRentalServices;

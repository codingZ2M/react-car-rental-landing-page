import React from "react";
import { FaCar, FaCogs, FaGasPump, FaUsers, FaRoad, FaDollarSign } from "react-icons/fa";
import featuredCarsData from "../../data/featuredCars";

const FeaturedCars = () => {
  return (
    <div className="w-[90%] lg:w-[80%] mx-auto bg-white pb-20">
      <h2 className="text-3xl font-bold text-[#071226] text-center py-8">
        Featured Cars
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-14">
        {featuredCarsData.map((car) => (
          <div
            key={car.id}
            className="p-6 rounded-lg flex flex-col items-start"
          >
            <img
              src={car.image}
              alt={car.car}
              className="w-full h-auto object-cover mb-4"
            />
            <h3 className="text-lg font-semibold text-[#071226] mb-4">
              {car.car}
            </h3>

            <div className="text-sm text-[#071226] space-y-2">
              <p className="flex items-center">
                <FaCar className="mr-2 text-[#3805F2]" />
                <span className="font-medium">Category:</span> {car.category}
              </p>
              <p className="flex items-center">
                <FaCogs className="mr-2 text-[#3805F2]" />
                <span className="font-medium">Transmission:</span> {car.transmission}
              </p>
              <p className="flex items-center">
                <FaGasPump className="mr-2 text-[#3805F2]" />
                <span className="font-medium">Fuel Type:</span> {car.fuelType}
              </p>
              <p className="flex items-center">
                <FaUsers className="mr-2 text-[#3805F2]" />
                <span className="font-medium">Seating:</span> {car.seatingCapacity}
              </p>
              <p className="flex items-center">
                <FaRoad className="mr-2 text-[#3805F2]" />
                <span className="font-medium">Mileage:</span> {car.mileage}
              </p>
              <p className="flex items-center">
                <FaDollarSign className="mr-2 text-[#3805F2]" />
                <span className="font-medium">Price:</span> {car.price}
              </p>
            </div>

            <button
              className="w-full bg-[#071226] text-white py-2 px-4 rounded mt-4 hover:bg-[#3805F2] transition-all"
            >
              {car.callToAction}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCars;
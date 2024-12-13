import React from 'react';
import { FaCar, FaCalendarCheck, FaPhoneAlt } from 'react-icons/fa';

const StepsToWork = () => {
  return (
    <section className="pt-20 bg-white w-[90%] mx-auto md:w-[80%]">
      <div className="px-4 md:px-8 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20">
          {/* Left Column: How It Works */}
          <div className="flex flex-col justify-center items-start">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-[#071226]">
              How It Works
            </h2>

            {/* Step 1 */}
            <div className="flex items-start mb-6 md:mb-8">
              <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-white text-[#3805F2] rounded-full mr-4">
                <FaCar className="text-2xl md:text-3xl" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-[#071226]">
                  Choose Your Car
                </h3>
                <p className="text-sm md:text-base text-[#071226] text-justify opacity-75">
                  Select the perfect car for your needs from our wide range of options.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start mb-6 md:mb-8">
              <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-white text-[#3805F2] rounded-full mr-4">
                <FaCalendarCheck className="text-2xl md:text-3xl" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-[#071226]">
                  Book Your Rental
                </h3>
                <p className="text-sm md:text-base text-[#071226] text-justify opacity-75">
                  Easily book your car online and choose your rental period. Our booking process is quick and simple.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start">
              <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-white text-[#3805F2] rounded-full mr-4">
                <FaPhoneAlt className="text-2xl md:text-3xl" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-[#071226]">
                  24/7 Support
                </h3>
                <p className="text-sm md:text-base text-[#071226] text-justify opacity-75">
                  Get support anytime. Our customer service team is available 24/7 to assist you with any concerns.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Car Image */}
          <div className="flex justify-center items-center">
            <img
              src="https://images.pexels.com/photos/244212/pexels-photo-244212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Car Rental"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsToWork;

import React from "react";

const Hero = () => {

  return (
    <div className="w-[90%] lg:w-[80%] mx-auto bg-white">
      <div className="flex flex-col lg:flex-row items-center py-6 px-4 md:py-12 md:px-14">
        <div className="lg:w-1/2 text-left">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#071226] leading-tight">
            Experience Reliable Car Rentals
          </h2>
          <p className="mt-4 text-[#071226] opacity- text-sm md:text-base">
            Choose from our extensive collection of vehicles for your next journey.
            Exceptional service, unmatched comfort, and affordable prices.
          </p>
          <button className="mt-6 px-6 md:px-10 py-2 bg-[#3805F2] text-white font-semibold hover:bg-[#071226] transition">
            Book Your Ride
          </button>
        </div>
        <div className="lg:w-1/2 flex justify-center mt-6 lg:mt-0">
          {/* Add an image or graphic here if needed */}
        </div>
      </div>

      {/* Full-Width Image */}
      <div className="w-full h-[30vh] md:h-[40vh]">
        <img
          src="https://images.unsplash.com/photo-1570582647329-5dfc8efa75eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Car Rental"
          className="w-full h-auto md:h-full object-cover bg-center"
        />
      </div>

      {/* Data Strip */}
      <div className="text-white flex flex-col lg:flex-row">
        {/* Left Column (60%) */}
        <div className="bg-[#071226] w-full lg:w-[63%] p-4 md:p-6 lg:px-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
            1. Why Choose Us for Car Rentals?
          </h2>
          <p className="text-xs md:text-sm text-justify font-normal">
            Experience seamless and comfortable car rentals with our extensive fleet,
            affordable pricing, and exceptional customer support. Whether you're traveling
            for business or leisure, we've got you covered.
          </p>
        </div>

        {/* Right Column (40%) */}
        <div className="bg-[#3805F2] w-full lg:w-[37%] p-4 md:p-6 lg:px-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
            2. We Make It Simple
          </h2>
          <p className="text-xs md:text-sm text-justify font-normal">
            With multiple locations, 24/7 availability, and a wide range of cars, our rental
            service ensures your journey is hassle-free and enjoyable from start to finish.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

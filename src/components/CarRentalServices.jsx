import React from "react";

const CarRentalServices = () => {
  const services = [
    {
      image: "https://images.unsplash.com/photo-1582206655876-485db7e3a20f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "Airport Transfers",
      description: "Reliable and timely airport transfer services to ensure you never miss your flight.",
    },
    {
      image: "https://images.unsplash.com/photo-1555652736-e92021d28a10?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "Wedding Events",
      description: "Luxury car rentals for your special day to make it even more memorable.",
    },
    {
      image: "https://images.unsplash.com/photo-1651375589888-d60953c75b15?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "Intercity Trips",
      description: "Comfortable and affordable car rentals for all your intercity travel needs.",
    },
    {
      image: "https://images.pexels.com/photos/18369291/pexels-photo-18369291/free-photo-of-a-mercedes-benz-s-class.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      type: "Corporate Travel",
      description: "Efficient and professional car rentals tailored for corporate needs.",
    },
    {
      image: "https://images.unsplash.com/photo-1661963630539-1b06e89b019a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "Tourist Sightseeing",
      description: "Explore top tourist destinations with our comfortable rental cars.",
    },
  ];

  return (
    <div className="w-[90%] md:w-[85%] lg:w-[80%] mx-auto bg-[#fff] py-20 px-4 md:px-10">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-[#071226] mb-8">
        Our Car Rental Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
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

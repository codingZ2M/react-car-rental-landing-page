const featuredCarsData = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/7154532/pexels-photo-7154532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    car: "BMW X5 2023",
    category: "Luxury SUV",
    transmission: "Automatic",
    fuelType: "Hybrid",
    seatingCapacity: "5 Passengers",
    mileage: "22 MPG City / 29 MPG Highway",
    cargoSpace: "33.9 cu. ft.",
    additionalFeatures:
      "GPS, Bluetooth, Backup Camera, Panoramic Sunroof, Heated Seats",
    price: "$99/day | $599/week",
    availability: "Immediate Booking",
    userRating: "4.9/5",
    pickupOptions: "Airport Pickup, Home Delivery",
    bookingFlexibility: "Free Cancellation, Unlimited Mileage",
    callToAction: "Rent Now",
  },
  {
    id: 2,
    image:"https://images.unsplash.com/photo-1650530579355-7ad9d4766043?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    car: "Toyota Corolla 2023",
    category: "Economy Sedan",
    transmission: "Automatic",
    fuelType: "Hybrid",
    seatingCapacity: "2 Passengers",
    mileage: "30 MPG City / 40 MPG Highway",
    cargoSpace: "13.1 cu. ft.",
    additionalFeatures: "Bluetooth, Backup Camera, Adaptive Cruise Control",
    price: "$45/day | $279/week",
    availability: "Limited Availability",
    userRating: "4.5/5",
    pickupOptions: "In-store Pickup",
    bookingFlexibility: "Free Cancellation, Mileage Limit 200 miles/day",
    callToAction: "View Details",
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/17266104/pexels-photo-17266104/free-photo-of-jeep-wrangler-car-against-grey-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    car: "Jeep Wrangler 2022",
    category: "Off-Road SUV",
    transmission: "Manual",
    fuelType: "Gasoline",
    seatingCapacity: "4 Passengers",
    mileage: "17 MPG City / 25 MPG Highway",
    cargoSpace: "31.7 cu. ft.",
    additionalFeatures: "4WD, Removable Roof, Off-Road Tires, GPS, Bluetooth",
    price: "$85/day | $499/week",
    availability: "Available Next Week",
    userRating: "4.7/5",
    pickupOptions: "Airport Pickup, In-store Pickup",
    bookingFlexibility: "Free Cancellation, Limited Mileage",
    callToAction: "Book Now",
  },
  {
    id: 4,
    image: "https://images.pexels.com/photos/10029773/pexels-photo-10029773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    car: "Tesla Model 3 2023",
    category: "Electric Sedan",
    transmission: "Automatic",
    fuelType: "Electric",
    seatingCapacity: "5 Passengers",
    mileage: "358 miles per charge",
    cargoSpace: "15 cu. ft.",
    additionalFeatures: "Autopilot, GPS, Bluetooth, Backup Camera, Heated Seats",
    price: "$120/day | $699/week",
    availability: "Immediate Booking",
    userRating: "4.8/5",
    pickupOptions: "Home Delivery, In-store Pickup",
    bookingFlexibility: "Free Cancellation, Unlimited Mileage",
    callToAction: "Reserve Now",
  },
  {
    id: 5,
    image: "https://images.pexels.com/photos/4529769/pexels-photo-4529769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    car: "Ford Explorer 2023",
    category: "Family SUV",
    transmission: "Automatic",
    fuelType: "Gasoline",
    seatingCapacity: "7 Passengers",
    mileage: "18 MPG City / 24 MPG Highway",
    cargoSpace: "18.2 cu. ft.",
    additionalFeatures: "GPS, Bluetooth, Backup Camera, Heated Seats, 3rd Row Seating",
    price: "$90/day | $550/week",
    availability: "Immediate Booking",
    userRating: "4.6/5",
    pickupOptions: "Airport Pickup, Home Delivery",
    bookingFlexibility: "Free Cancellation, Limited Mileage",
    callToAction: "Rent Now",
  },
  {
    id: 6,
    image: "https://images.pexels.com/photos/6194412/pexels-photo-6194412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    car: "Audi A6 2023",
    category: "Luxury Sedan",
    transmission: "Automatic",
    fuelType: "Gasoline",
    seatingCapacity: "5 Passengers",
    mileage: "24 MPG City / 32 MPG Highway",
    cargoSpace: "14.1 cu. ft.",
    additionalFeatures: "GPS, Bluetooth, Backup Camera, Leather Seats, Sunroof",
    price: "$110/day | $650/week",
    availability: "Limited Availability",
    userRating: "4.7/5",
    pickupOptions: "In-store Pickup, Home Delivery",
    bookingFlexibility: "Free Cancellation, Unlimited Mileage",
    callToAction: "Book Now",
  },
  {
    id: 7,
    image: "https://images.pexels.com/photos/16378489/pexels-photo-16378489/free-photo-of-a-honda-civic-parked-on-the-side-of-the-road-in-a-residential-area.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    car: "Honda Civic 2023",
    category: "Compact Sedan",
    transmission: "Automatic",
    fuelType: "Gasoline",
    seatingCapacity: "5 Passengers",
    mileage: "31 MPG City / 40 MPG Highway",
    cargoSpace: "15.1 cu. ft.",
    additionalFeatures: "Bluetooth, Backup Camera, Lane Assist, Adaptive Cruise Control",
    price: "$50/day | $300/week",
    availability: "Immediate Booking",
    userRating: "4.4/5",
    pickupOptions: "In-store Pickup",
    bookingFlexibility: "Mileage Limit 150 miles/day",
    callToAction: "View Details",
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1615769516664-ca7302760b23?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    car: "Chevrolet Suburban 2023",
    category: "Full-Size SUV",
    transmission: "Automatic",
    fuelType: "Gasoline",
    seatingCapacity: "8 Passengers",
    mileage: "14 MPG City / 20 MPG Highway",
    cargoSpace: "41.5 cu. ft.",
    additionalFeatures: "4WD, GPS, Bluetooth, Backup Camera, Heated Seats, Sunroof",
    price: "$130/day | $800/week",
    availability: "Limited Availability",
    userRating: "4.6/5",
    pickupOptions: "Airport Pickup, In-store Pickup",
    bookingFlexibility: "Free Cancellation, Limited Mileage",
    callToAction: "Reserve Now",
  },
  {
    id: 9,
    image: "https://images.pexels.com/photos/11770453/pexels-photo-11770453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    car: "Mercedes-Benz C-Class 2023",
    category: "Luxury Sedan",
    transmission: "Automatic",
    fuelType: "Gasoline",
    seatingCapacity: "5 Passengers",
    mileage: "25 MPG City / 35 MPG Highway",
    cargoSpace: "12.6 cu. ft.",
    additionalFeatures: "GPS, Bluetooth, Leather Seats, Sunroof, Backup Camera",
    price: "$105/day | $630/week",
    availability: "Immediate Booking",
    userRating: "4.8/5",
    pickupOptions: "Home Delivery",
    bookingFlexibility: "Free Cancellation, Unlimited Mileage",
    callToAction: "Book Now",
  },
  {
    id: 10,
    image: "https://images.pexels.com/photos/27286179/pexels-photo-27286179/free-photo-of-kia-sportage.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    car: "Kia Sportage 2023",
    category: "Compact SUV",
    transmission: "Automatic",
    fuelType: "Hybrid",
    seatingCapacity: "5 Passengers",
    mileage: "38 MPG City / 38 MPG Highway",
    cargoSpace: "39.6 cu. ft.",
    additionalFeatures: "Bluetooth, Backup Camera, Lane Keep Assist, Heated Seats",
    price: "$75/day | $450/week",
    availability: "Available Next Week",
    userRating: "4.5/5",
    pickupOptions: "In-store Pickup, Home Delivery",
    bookingFlexibility: "Free Cancellation, Limited Mileage",
    callToAction: "View Details",
  },
];

export default featuredCarsData;

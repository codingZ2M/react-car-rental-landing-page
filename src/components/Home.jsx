import React from 'react'
import Hero from './Hero'
import StepsToWork from './StepsToWork'
import CarRentalFeatures from './CarRentalFeatures'
import CarRentalServices from './CarRentalServices'

const Home = () => {
  return (
    <div>
      <Hero/>
      <StepsToWork/>
      <CarRentalFeatures/>
      <CarRentalServices/>
    </div>
  )
}

export default Home
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Footer from './components/Footer'
import FeaturedCars from './components/FeaturedCars'
import NavBar from './components/NavBar'


const App = () => {
  return (
    <div className='mb-12'>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/featured-cars" element={<FeaturedCars/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
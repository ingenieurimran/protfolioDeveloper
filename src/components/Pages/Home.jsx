import React from 'react'
import AboutComponent from '../Body/About/AboutComponent'
import PortFolio from '../Body/Portfolio/PortFolio'
import HeaderComponents from '../Header/HeaderComponents'
import NavBar from '../Navbar/NavBar'

function Home() {
  return (
    <div>
      <NavBar />
      <HeaderComponents />
      <AboutComponent />
      <PortFolio />
    </div>
  )
}

export default Home

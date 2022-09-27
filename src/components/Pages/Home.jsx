import React from 'react'
import AboutComponent from '../Body/About/AboutComponent'
import ContactComponent from '../Body/Contact/ContactComponent'
import PortFolio from '../Body/Portfolio/PortFolio'
import FooterComponent from '../Footer/FooterComponent'
import HeaderComponents from '../Header/HeaderComponents'
import NavBar from '../Navbar/NavBar'

function Home() {
  return (
    <div>
      <NavBar />
      <HeaderComponents />
      <AboutComponent />
      <PortFolio />
      <ContactComponent />
      <FooterComponent />
    </div>
  )
}

export default Home

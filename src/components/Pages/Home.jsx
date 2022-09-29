import React from 'react'
// import NavBar from '../Navbar/NavBar'
import HeaderComponents from '../Header/HeaderComponents'
import AboutComponent from '../Body/About/AboutComponent'
import PortFolio from '../Body/Portfolio/PortFolio'
import ContactComponent from '../Body/Contact/ContactComponent'
import Footer from '../Footer/FooterComponents'

function Home() {
  return (
    <div>
      {/* <NavBar /> */}
      <HeaderComponents />
      <AboutComponent />
      <PortFolio />
      <ContactComponent />
      <Footer />
    </div>
  )
}

export default Home

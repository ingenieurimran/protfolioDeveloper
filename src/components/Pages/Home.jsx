import React from 'react'
import AboutComponent from '../Body/About/AboutComponent'
import HeaderComponents from '../Header/HeaderComponents'
import NavBar from '../Navbar/NavBar'

function Home() {
  return (
    <div>
      <NavBar />
      <HeaderComponents />
      <AboutComponent />
    </div>
  )
}

export default Home

import React from 'react'
import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar'
import MidSection from '../Components/MidSection'
import Footer from '../Components/Footer'
import SendEmail from '../Components/SendEmail'



const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <MidSection/>
        <SendEmail/>
        <Footer/>
    </div>
  )
}

export default Home
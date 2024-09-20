// import React from 'react'
import About_card from "../../components/about_card/About_card"
import Hero from "../../components/hero/Hero"
import Service from '../../components/service/Service'
import Card from '../../components/card/Card'
import Hire from '../../components/hire/Hire'
import Testimonial from "../../components/testimonials/Testimonial"

import './home.css'
const Home = () => {
  return (
    <>
    <Hero/>
    <About_card/>
    <Service/>
    <Card/>
    <Hire/>
    <Testimonial/>
    </>
  )
}

export default Home
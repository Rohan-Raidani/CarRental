import React from 'react'
import './about.css'
import { IoCallOutline } from "react-icons/io5";
import bmw from '/images/drive.jpg'

import About_card from '../../components/about_card/About_card'
import Hire from '../../components/hire/Hire'
import Experts from '../../components/experts/Experts'

import img from '/images/drive.jpg'

const About = () => {
  return (
    <div className="about">
      <div className="top-image"> 
        <div className="img"></div>
        <h2 className="title">About Us</h2 >
      </div>
      <About_card/>
      <div className="safe-ride">
      <div className="right">
        <img src={img} alt="" />
      </div>
      <div className="left">
        <h2 style={{color:"#4554a6"}}>We Are Committed To Provide Safe Ride Solutions</h2>
        <p>
        At NextCar, our unwavering commitment is to provide safe and reliable ride solutions for all our customers. We understand the importance of safety in every journey, and our top priority is to ensure your peace of mind from the moment you book with us until you reach your destination. With a fleet of meticulously maintained vehicles and experienced drivers who prioritize your safety and comfort, we strive to offer a seamless and worry-free travel experience. Whether you're navigating through city streets or heading to the airport, you can trust us to deliver a secure and pleasant ride every time.
        </p>
        <div className="help" style={{display:"flex", gap:"10px", alignItems:"center"}}>
        <IoCallOutline style={{fontSize:"1.5rem"}}/>
        <div className="number" style={{display:"flex", flexDirection:"column", gap:"10px"}}>
          <h3 style={{color:"#fbb34e"}}>Need Any Help?</h3>
          <h3>+91 - 8123456789</h3>
        </div>
        </div>


    </div>
      </div>
      <Hire/>

      
      <Experts/>
    </div>
  )
}

export default About
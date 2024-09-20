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
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, voluptates nisi facilis in quia dolor enim consequatur iste exercitationem, molestias temporibus placeat officiis, veritatis velit..</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, voluptates nisi facilis in quia dolor enim consequatur iste exercitationem, molestias temporibus placeat officiis, veritatis velit..</p>
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
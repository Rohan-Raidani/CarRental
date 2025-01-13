// import React from 'react'
import { MdOutlineHomeWork , MdOutlineTimer ,MdLocalAirport } from "react-icons/md";
import { FaCar,FaLocationDot } from "react-icons/fa6";
import {Link} from 'react-router-dom'
import './service.css'

const Service = () => {
  return (
    <>
    <div className="service-heading">
      <h4>See our</h4>
      <h1>Popular Services </h1>
   </div>
 <div className="service-main">
    <div className="service-section">
         <div className="location">
         <Link><FaLocationDot/></Link>  
         </div>
         <h4>City transfer</h4>
        <h6>Experience seamless and comfortable city transfers with our professional car rental services, ensuring you reach your destination with ease and style.</h6>
    </div>
    <div className="service-section">
         <div className="location">
           <Link><MdOutlineHomeWork/></Link>
         </div>
         <h4>Whole City Tour</h4>
        <h6>Here we provide Whole city Tour to help you to visit your favourite place</h6>
    </div>
    <div className="service-section">
         <div className="location">
           <Link><FaCar/></Link>
         </div>
         <h4>Unlimited Miles Car Rental</h4>
        <h6>Here we provide Unlimited Miles for your booking with Reasonable coast </h6>
    </div>
    <div className="service-section">
         <div className="location">
           <Link><MdOutlineTimer/></Link>
         </div>
         <h4>Fast & Easy Booking</h4>
        <h6>Will help  you to assist fast and Easy Booking in a convenient manner </h6>
    </div>
    <div className="service-section">
         <div className="location">
           <Link><FaLocationDot/></Link>
         </div>
         <h4>Many Pickup Locations</h4>
        <h6>Here you will get various multiple location pickup to assist you better</h6>
    </div>
    <div className="service-section">
         <div className="location">
           <Link><MdLocalAirport/></Link>
         </div>
         <h4>Airport Transfer</h4>
        <h6>Ensure a smooth and stress-free journey with our reliable airport transfer services, offering timely pickups and drop-offs to and from the airport</h6>
    </div>
 
 </div>
 
 </>

  )
}

export default Service
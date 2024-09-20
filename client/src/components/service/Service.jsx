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
        <h6>Tempor tempor sadipscing vero lorem sea, invidunt sed et eos ipsum et erat. Dolor ut duo sadipscing lorem. Gubergren gub</h6>
    </div>
    <div className="service-section">
         <div className="location">
           <Link><MdOutlineHomeWork/></Link>
         </div>
         <h4>Whole City Tour</h4>
        <h6>Tempor tempor sadipscing vero lorem sea, invidunt sed et eos ipsum et erat. Dolor ut duo sadipscing lorem. Gubergren gub</h6>
    </div>
    <div className="service-section">
         <div className="location">
           <Link><FaCar/></Link>
         </div>
         <h4>Unlimited Miles Car Rentalr</h4>
        <h6>Tempor tempor sadipscing vero lorem sea, invidunt sed et eos ipsum et erat. Dolor ut duo sadipscing lorem. Gubergren gub</h6>
    </div>
    <div className="service-section">
         <div className="location">
           <Link><MdOutlineTimer/></Link>
         </div>
         <h4>Fast & Easy Booking</h4>
        <h6>Tempor tempor sadipscing vero lorem sea, invidunt sed et eos ipsum et erat. Dolor ut duo sadipscing lorem. Gubergren gub</h6>
    </div>
    <div className="service-section">
         <div className="location">
           <Link><FaLocationDot/></Link>
         </div>
         <h4>Many Pickup Locations</h4>
        <h6>Tempor tempor sadipscing vero lorem sea, invidunt sed et eos ipsum et erat. Dolor ut duo sadipscing lorem. Gubergren gub</h6>
    </div>
    <div className="service-section">
         <div className="location">
           <Link><MdLocalAirport/></Link>
         </div>
         <h4>Airport Transfer</h4>
        <h6>Tempor tempor sadipscing vero lorem sea, invidunt sed et eos ipsum et erat. Dolor ut duo sadipscing lorem. Gubergren gub</h6>
    </div>
 
 </div>
 
 </>

  )
}

export default Service
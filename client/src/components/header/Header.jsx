// import React from 'react'
import { FaCar } from "react-icons/fa";
import { FaEarthAsia } from "react-icons/fa6";
import './header.css'

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <FaCar/>
        <div className="name">
          NextCar
        </div>
      </div>
      <div className="location">
      <FaEarthAsia />
      <div className="location_content">
        <h4>Jaipur , Rajasthan</h4>
        <h6>10am - 6pm</h6> 
      </div>
      </div>
      <div className="admin">
        <button>Admin</button>
      </div>
    </div>
  )
}

export default Header
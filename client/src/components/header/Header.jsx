// import React from 'react'
import { FaCar } from "react-icons/fa";
import { FaEarthAsia } from "react-icons/fa6";
import './header.css'
import { useLocation, useNavigate } from "react-router-dom";
import Modal from "../modal/Modal";
import Login from "../login/Login";
import { useState } from "react";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  const location = useLocation();
  let text = "Admin"
  if (location.pathname === "/" || location.pathname === "/about" || location.pathname === "/contact" || location.pathname === "/facilities") {
    text = "Admin"
  }else if (location.pathname === "/admin" || location.pathname === "/admin/car" || location.pathname === "/admin/driver" || location.pathname === "/admin/carRequest" || location.pathname === "/admin/jobRequest") {
    text = "Home"
  }

  const handleAdmin = () => {
    if (location.pathname === "/" || location.pathname === "/about" || location.pathname === "/contact" || location.pathname === "/facilities") {
      setIsModalOpen(true)
      // navigate('/admin')
    }else if (location.pathname === "/admin" || location.pathname === "/admin/car" || location.pathname === "/admin/driver" || location.pathname === "/admin/carRequest" || location.pathname === "/admin/jobRequest") {
      navigate('/')
    }
  }

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
      <div className="admin-button">
        <button onClick={handleAdmin} style={{cursor:"pointer"}} >{text}</button>
      </div>
      {/* Modal for login */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Login onclose={() => setIsModalOpen(false)}/>
      </Modal>
    </div>
  )
}

export default Header
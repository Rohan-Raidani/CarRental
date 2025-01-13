import React from 'react'
import './about_card.css'
import { SiTicktick } from "react-icons/si";
import bmw from '/images/bmw-offer.png'

const About_card = () => {
  return (
    <div className="about_card">
      <div className="left">
        <h3 className='yellow'>About Us</h3>
        <h2 style={{color:"#4554a6"}}>Welcome to car rental service</h2>
        <p>At CarRental, we are committed to providing top-notch car rental services tailored to meet your unique needs. Based in the vibrant city of Jaipur, we take pride in offering a diverse fleet of well-maintained vehicles, ensuring a seamless and enjoyable rental experience for both locals and tourists alike.</p>
      <div className="list">
        <div className="l1">
          <div className="i1"> <SiTicktick style={{color:"#fbb34e"}}/> <p>Wide Range of Vehicles</p> </div>
          <div className="i2"> <SiTicktick style={{color:"#fbb34e"}}/> <p> Professional Drivers</p></div>
        </div>
        <div className="l2">
          <div className="i1"> <SiTicktick style={{color:"#fbb34e"}}/> <p> Customer-Centric Approach</p></div>
          <div className="i2"><SiTicktick style={{color:"#fbb34e"}}/>  <p> 24/7 Support</p></div>
          </div>
      </div>
      </div>
      <div className="right">
        <img src={bmw} alt="" />
      </div>
    </div>
  )
}

export default About_card
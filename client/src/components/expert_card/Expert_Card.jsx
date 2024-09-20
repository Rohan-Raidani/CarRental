import React from 'react'
import './expert_card.css'
import { FiTwitter, FiFacebook, FiInstagram,FiLinkedin } from "react-icons/fi";


const Expert_Card = ( { key, img,name,exp}) => {
  return (
    <div className="expert_card" key={key}>
      <div className="main">
      <div className="img">
      <div className="up">
        <span style={{display:"flex", justifyContent:"center", alignItems:"center"}}><FiTwitter/></span>
        <span><FiFacebook/></span>
        <span><FiInstagram/></span>
        <span><FiLinkedin/></span>
      </div>
        <img src={img} alt="" />
      </div>
          <p style={{color:"#fbb34e"}}>{name}</p>
          <p style={{marginBottom:"15px"}}> {exp} years of experience</p>
      </div>
    </div>
  )
}

export default Expert_Card
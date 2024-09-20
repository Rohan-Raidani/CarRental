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
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quos eveniet qui neque inventore impedit magnam suscipit maiores animi praesentium quas, sunt nemo molestiae quod quisquam maxime a unde obcaecati. Fuga voluptatibus beatae at tempore vero molestiae doloremque non dolorum.</p>
      <div className="list">
        <div className="l1">
          <div className="i1"> <SiTicktick style={{color:"#fbb34e"}}/> <p> Lorem ipsum dolor sit</p> </div>
          <div className="i2"> <SiTicktick style={{color:"#fbb34e"}}/> <p> Lorem ipsum dolor sit</p></div>
        </div>
        <div className="l2">
          <div className="i1"> <SiTicktick style={{color:"#fbb34e"}}/> <p> Lorem ipsum dolor sit</p></div>
          <div className="i2"><SiTicktick style={{color:"#fbb34e"}}/>  <p> Lorem ipsum dolor sit</p></div>
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
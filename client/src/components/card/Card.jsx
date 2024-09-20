// import React from 'react'
import './card.css'
import {cards} from '../../../public/assets/card'
import {Link} from 'react-router-dom'
import { FaCar } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { RiTimerFlashLine } from "react-icons/ri";

const Card = () => {
  return (
    <>
      <div className="card-section">
        <h3>Come with</h3>
        <h2>Hot offers</h2>
        <div className="card-content">
            {
              cards.map((item)=>(
                <div className="all-cards" key={item.id}>
                  <img src={item.image} alt="Car image" />
                  <h2>{item.name}</h2>
                  <h3>{item.price}</h3>
                  <div className="car-details">
                    <p><FaCar/>{item.model}</p>
                    <p><IoSettingsOutline/>{item.type}</p>
                    <p><RiTimerFlashLine/>{item.speed}</p>
                  </div>
                  <div className="btns">
                    <Link><button className='btn-1'>Rent</button></Link>
                    <Link><button className='btn-2'>Details</button></Link>
                    </div>
                </div>
              ))
            }
        </div>
    </div>
    </>
  )
}

export default Card
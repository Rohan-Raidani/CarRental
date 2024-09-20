// import React from 'react'
import Slider from "react-slick";
import {sliding } from '../../../public/assets/slider'


import './hero.css'



const Hero = () => {
  const settings = {
    fade: true,
    speed: 2000,
    autoplaySpeed:2000,
    infinite: true,
    autoplay:true, 
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover:false,
  };
  return (
    <div className="hero">
      <div className="slider-container">
        <Slider {...settings}  >
          {sliding.map((slide)=>(
          <div className="hero-section" key={slide.id}>
             <img src={slide.image} alt="car image" />
             {/* {console.log(slide.image)} */}
           </div>
         ))}
        </Slider>
        <div className="hero-content">
         <h3>Rent $70 Per Day</h3>
         <h1>Reserve Now and Get 50% off</h1>
         <button>Reserve Now</button>
        </div>
     </div>
        
      </div>
  )
}

export default Hero
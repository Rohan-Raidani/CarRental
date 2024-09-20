// import React from 'react'
import Slider from 'react-slick'
import {testimonial} from '../../../public/assets/review'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './testimonial.css'

const Testimonial = () => {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed:1000,
        autoplaySpeed: 3000,
        pauseOnHover: true
      };
  return (
    <>  
     <div className="testimonial-head">
                    <h3>Our client Says</h3>
                    <h2>Testimonials</h2>
 
        <div className="slider-cantner">

          <Slider {...settings}>
          {
           testimonial.map((item)=>(
            <div className="testimonial-section" key={item.id}>
              <div className="review-section">
                <p>{item.review}</p>
                <div className="review-content">
                    <img src={item.image} alt="" />
                    <div className="cust">
                    <h4>{item.name}</h4>
                    <h6>{item.type}</h6>
                    </div>
                </div>

              </div>
            </div>
             
           ))
             
        }
        </Slider>
        </div>
        </div>
    </>
    
  )
}

export default Testimonial
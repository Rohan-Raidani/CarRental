// import React from 'react'
import Expert_Card from '../expert_card/Expert_Card'
import './experts.css'
// import img from '/images/ava-1.jpg'
import Slider from 'react-slick'
import { experts } from '../../../public/assets/experts'

const Experts = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  return (
    <div className="experts">
      <h3 style={{marginBottom:"10px", color:"#fbb34e"}}>Experts</h3>
      <h2 style={{marginBottom:"50px", color:"#4554a6"}}>Our Members</h2>
      <div style={{height:"60%"}}>
        <div className="slider-container">
          <Slider {...settings}>
          {
          experts.map((item) => (
              <Expert_Card key={item.id} img={item.path} name={item.name} exp={item.exp} />
          ))
        }
        </Slider>
        </div>

      </div>
    </div>
  )
}

export default Experts
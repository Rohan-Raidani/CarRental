// import React from 'react'
import './hire.css'
import img from '/images/hire.png'

const Hire = () => {
  return (
    <div className="hire">
      <div className="img"></div>
      <div className="abs">
      <div className="left">
        <img src={img} alt="" style={{height:"80%", width:"80%"}} />
      </div>
      <div className="right">
        <h1>Do You Want to Earn With Us? So Don't Be Late</h1>
        <button>Become a Driver</button>
      </div>
      </div>
      
    </div>
  )
}

export default Hire
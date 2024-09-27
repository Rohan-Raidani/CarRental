// import React from 'react'
import { useState } from 'react';
import './hire.css'
import img from '/images/hire.png'
import Login from './login';
import Modal from '../modal/Modal';


const Hire = () => {
  const [form , setForm] = useState(false);

 const handleDriver = ()=>{
   setForm(true);
 }
  return (
    <div className="hire">
      <div className="img"></div>
      <div className="abs">
      <div className="left">
        <img src={img} alt="" style={{height:"80%", width:"80%"}} />
      </div>
      <div className="right">
        <h1>Do You Want to Earn With Us? So Do nor  Be Late</h1>
        <button className='btn' onClick={handleDriver} >Become a Driver</button>
        <Modal isOpen={form} onClose={() => setForm(false)}>
        <Login onclose={() => setForm(false)}/>
        </Modal>
      </div>
      </div>
      
    </div>
  )
}

export default Hire
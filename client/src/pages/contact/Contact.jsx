import React,{useRef , useEffect,useState} from 'react'
import './contact.css'
import { FiTwitter, FiFacebook, FiInstagram,FiLinkedin } from "react-icons/fi";
import emailjs from "emailjs-com"

const Contact = () => {
  
  const [message, setmessage] =  useState('')

  const form = useRef();

  useEffect(() => {
    emailjs.init("VnKGuGhqV-MCD7wps");
  }, []);

  function sendEmail(e){
    e.preventDefault();

    emailjs
      .sendForm('gmail', 'temp', form.current)
      .then(
        () => {
          // console.log('SUCCESS!');
          setmessage("Message sent successfully");
        },
        (error) => {
          setmessage("Error: ",error.text);
          // console.log('FAILED...', error.text);
        },
      );
      e.target.reset();
  }
  return (
    <div className="contact">
      <div className="top-image"> 
        <div className="img"></div>
        <h2 className="title">Contact Us</h2 >
      </div>
      <div className="contact-section">
        <form className="form" onSubmit={sendEmail} ref={form}>
          <h3 style={{color:"#fbb34e" , marginBottom:"10px"}}>Get In Touch</h3>
          <input type="text" placeholder='Your Name' name='name' id='name' className='inp'/>
          <input type="text" placeholder='Email' name='email' id='email' className='inp'/>
          <textarea name="message" id="message" placeholder='Message' className='inp'rows={3}></textarea>
          <input type="submit" value="Send Message" className='btn' />
          {message && <p className='email-message' style={{color:"#fbb34e"}}>{message}</p>}
        </form>
        <div className="info">
          <h3 style={{color:"#fbb34e", marginBottom:"10px"}}>Contact Information</h3>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <div className="phone" style={{display:"flex"}}><span style={{color:"#fbb34e"}}>Phone: &nbsp;</span> <p> +91-8745931586</p></div>
          <div className="email" style={{display:"flex"}}><span style={{color:"#fbb34e"}}>Email: &nbsp;</span> <p> jhon@gmail.com</p></div>
          <div className="follow"><span style={{display:"block", color:"#fbb34e", marginBottom:"15px"}}>Follow Us</span> <FiFacebook className='icons' /> &nbsp; <FiInstagram className='icons' />&nbsp; <FiLinkedin className='icons' /> &nbsp; <FiTwitter className='icons' /> </div>
        </div>
      </div>

    </div>
  )
}

export default Contact
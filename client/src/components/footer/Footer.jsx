import React from 'react'
import './footer.css'
import { FaCar } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {

  const location = useLocation();

  const adminItems = [
    {name:"Admin", path:"/admin"},  
    {name:"Car", path:"/admin/car"},  
    {name:"Driver", path:"/admin/driver"},  
    {name:"Request", path:"/admin/request"}, 
  ]

  const homeItems = [
    {name:"Home", path:"/"},
    {name:"About", path:"/about"},
    {name:"Contact", path:"/contact"},
    {name:"Facilities", path:"/facilities"},
    
  ] 

  const navItems = location.pathname.startsWith('/admin') ? adminItems : homeItems;

  return (
    <div className="footer">
      <div className="top">
        <div className="info">
          <div className="head"><FaCar/> NextCar
          </div>
          <div className="description">At NextCar, we offer a diverse range of well-maintained vehicles, from compact cars to luxury SUVs. Our professional drivers ensure your safety and comfort, whether you're heading into the city or catching a flight. With flexible booking options and 24/7 customer support, we make your travel experience smooth and hassle-free.</div>
        </div>
        <div className="quick-links">
          <div className="head">Quick Links</div>
          <div className="links">
          {
          navItems.map( (item) => (
            <Link key={item.name}  style={{textDecoration:"none"}} to={item.path}><p>{item.name}</p></Link>
          ))
        }
            {/* <Link style={{textDecoration:"none"}} to={"/"} ><p>Home</p></Link>
            <Link style={{textDecoration:"none"}} to={"/about"}><p>About</p></Link>
            <Link style={{textDecoration:"none"}} to={"/contact"}><p>Contact</p></Link>
            <Link style={{textDecoration:"none"}} to={"/facilities"}><p>Facilities</p></Link> */}
          </div>
        </div>
        <div className="address">
          <div className="head">Head Office</div>
          <p>ManSarover , Jaipur ,Rajasthan </p>
        </div>
      </div>
      <div className="bottom">Build by Rahul Chaudhary and Rohan Raidani </div>
    </div>
  )
}

export default Footer
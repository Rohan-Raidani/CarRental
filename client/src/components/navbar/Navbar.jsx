// import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {

  const location = useLocation();

  const navItems = [
    {name:"Home", path:"/"},
    {name:"About", path:"/about"},
    {name:"Contact", path:"/contact"},
    {name:"Facilities", path:"/facilities"},
  ] 
  return (
<div className="navbar">
<nav>
      <ul>
        {
          navItems.map( (item) => (
             <li key={item.name} >
              <Link to={item.path} className={`${location.pathname === item.path ? "yellow": "orange"  } `}>  {item.name} </Link>
              </li>
          ))
        }
      </ul>
   </nav>
</div>
  )
}

export default Navbar
import React,{useState,useEffect} from 'react'
import './card.css'
import {cards} from '../../../public/assets/card'
import {Link} from 'react-router-dom'
import { FaCar } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { RiTimerFlashLine } from "react-icons/ri";

import {getCar} from '../../services/api'



const Card = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const carData = await getCar();
        setCars(carData);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div className="card-section">
        <h3>Come with</h3>
        <h2>Hot offers</h2>
        <div className="card-content">
            {
              cars.map((car)=>(
                <div className="all-cards" key={car._id}>
                  <div className="img" style={{width:"28rem",backgroundColor:"green",height:"15rem",overflow:"hidden" }}>
                  
                  <img src={`data:image/png;base64,${car.image}`} alt={car.name} style={{height:"100%",width:"100%"}} />
                  </div>
                  <h2>{car.name}</h2>
                  <h3>${car.price}</h3>
                  <div className="car-details">
                    <p><FaCar/>{car.fuelType}</p>
                    <p><IoSettingsOutline/>{car.gearType}</p>
                    <p><RiTimerFlashLine/>{car.mileage} km/L</p>
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
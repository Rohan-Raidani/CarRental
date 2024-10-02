import { useState, useEffect } from 'react';
import './card.css';
import { Link } from 'react-router-dom';
import { FaCar } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { RiTimerFlashLine } from "react-icons/ri";
import Rent from './Rent';
import Modal1 from './Modal1';
import { getCar } from '../../services/api';

const Card = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [rent, setRent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    startDate: '',
    endDate: '',
    drivingLicense: '',
    email: '',
    carId: '',
  });

  const handleRent = (carId) => {
    setFormData(prevData => ({
      ...prevData,
      carId: carId, // Set the carId
    }));
    setRent(true);
  };

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
    <div className="card-section">
      <h3>Come with</h3>
      <h2>Hot offers</h2>
      <div className="card-content">
        {cars.map((car) => (
          <div className="all-cards" key={car._id}>
            <div className="img" style={{ width: "28rem", backgroundColor: "green", height: "15rem", overflow: "hidden" }}>
              <img src={`data:image/png;base64,${car.image}`} alt={car.name} style={{ height: "100%", width: "100%" }} />
            </div>
            <h2>{car.name}</h2>
            <h3>${car.price}</h3>
            <div className="car-details">
              <p><FaCar />{car.fuelType}</p>
              <p><IoSettingsOutline />{car.gearType}</p>
              <p><RiTimerFlashLine />{car.mileage} km/L</p>
            </div>
            <div className="btns">
              <Link>
                <button className='btn-1' onClick={() => handleRent(car._id)}>Rent</button>
              </Link>
              <Modal1 isOpen={rent} onClose={() => setRent(false)}>
                <Rent onClose={() => setRent(false)} formData={formData} setFormData={setFormData} />
              </Modal1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;

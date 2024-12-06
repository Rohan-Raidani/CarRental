import React, { useState, useEffect } from 'react';
import './car.css';
import { getCar, deleteCar } from '../../services/api';

const Car = () => {
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

  const handleDelete = async (carId) => {
    try {
      await deleteCar(carId);
      setCars(cars.filter(car => car._id !== carId)); // update the state and remove the car
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="car">
      <h1 className="title">All Cars</h1>

      <div className="addCar">
        <form className="table-container">
          <table>
            <tbody>
              {cars.map((car, index) => (
                <tr key={car._id}>
                  <td>{index + 1}</td>
                  <td data-label="">
                    
                    <img src={`data:image/png;base64,${car.image}`} alt={car.name} style={{ maxWidth: '200px', height: 'fit-content' }} />
                  </td>
                  <td data-label="">
                    <strong>Car Name:</strong> {car.name}
                  </td>
                  <td data-label="">
                    <strong>Price:</strong> ${car.price}
                  </td>
                  <td data-label="">
                    <strong>Fuel Type:</strong> {car.fuelType}
                  </td>
                  <td data-label="">
                    <strong>Gear Type:</strong> {car.gearType}
                  </td>
                  <td data-label="">
                    <strong>Mileage:</strong> {car.mileage} km/L
                  </td>
                  <td data-label="">
                    <button type="button" onClick={() => handleDelete(car._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
};

export default Car;

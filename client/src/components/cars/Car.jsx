import React,{useState,useEffect} from 'react'
import './car.css'
import { getCar,deleteCar } from '../../services/api'

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
      setCars(cars.filter(car => car._id  !== carId)) // update the state and remove the car
    } catch (error) {
      setError(error.message);
    }
  }

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (

    <div className="car">
      <h1 className='title'>All Cars</h1>

      <div className="addCar">
        {/* <h2>Add New Car</h2> */}
        <form className='table-container'>
          <table>
            <thead>
              <tr>
                <th style={{ width: "0%", padding: "0px" }}>Index</th>
                <th>Image</th>
                <th>Car Name</th>
                <th>Price</th>
                <th>Fuel Type</th>
                <th>Gear Type</th>
                <th>Mileage</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cars.map((car, index) => (
                <tr key={car._id}>
                  <td>{index + 1}</td>
                  <td>
                    <img src={`data:image/png;base64,${car.image}`} alt={car.name} style={{ maxWidth: '100px', height: 'auto' }} />
                  </td>
                  <td>{car.name}</td>
                  <td>${car.price}</td>
                  <td>{car.fuelType}</td>
                  <td>{car.gearType}</td>
                  <td>{car.mileage} km/L</td>
                  <td><button type="button" onClick={() => handleDelete(car._id)}>Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </form>
      </div>
    </div>
  )
}

export default Car
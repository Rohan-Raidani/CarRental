import React,{useState,useEffect} from 'react'
import { getDriver,deleteDriver } from '../../services/api'

const Driver = () => {

  const [drivers, setdrivers] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(null);
  const [driverForm , setDriverForm] = useState(false)

  useEffect(() => {
    const fetchDrivers = async () => {
      try {
        const driverData = await getDriver();
        setdrivers(driverData);
      } catch (error) {
        seterror(error.message);
      }finally{
        setloading(false)
      }
    };
    fetchDrivers();
  }, [])

  const handleDelete = async (driverId) => {
    try {
      await deleteDriver(driverId);
      setdrivers(drivers.filter(driver => driver._id  !== driverId)) // update the state and remove the car
    } catch (error) {
      seterror(error.message)
    }
  }

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="car">
    <h1 className='title'>All Drivers</h1>

    <div className="addCar">
      <form className='table-container'>
        <table>
          <thead>
            <tr>
              <th style={{ width: "0%", padding: "0px" }}>Index</th>
              <th>Image</th>
              <th>Contact No</th>
              <th>Address</th>
              <th>Aadhar Image</th>
              <th>Driving Liscence</th>
              <th>Car Assigned</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {drivers.map((driver, index) => (
              <tr key={driver._id}>
                <td>{index + 1}</td>
                <td>
                  <img src={`data:image/png;base64,${driver.image}`} alt={driver.contactNo} style={{ maxWidth: '100px', height: 'auto' }} />
                </td>
                <td>{driver.contactNo}</td>
                <td>{driver.address}</td>
                <td>
                  <img src={`data:image/png;base64,${driver.aadharImage}`} alt={driver.contactNo} style={{ maxWidth: '100px', height: 'auto' }} />
                </td>
                <td>
                  <img src={`data:image/png;base64,${driver.drivingLicenseImage
}`} alt={driver.contactNo} style={{ maxWidth: '100px', height: 'auto' }} />
                </td>
                <td>{driver.carAssigned}</td>
                <td><button type="button" onClick={() => handleDelete(driver._id)} >Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  </div>
  )
}

export default Driver
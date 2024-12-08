import React, { useState, useEffect } from 'react';
import { getDriver, deleteDriver } from '../../services/api';
import './driver.css';

const Driver = () => {
  const [drivers, setdrivers] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(null);

  useEffect(() => {
    const fetchDrivers = async () => {
      try {
        const driverData = await getDriver();
        setdrivers(driverData);
      } catch (error) {
        seterror(error.message);
      } finally {
        setloading(false);
      }
    };
    fetchDrivers();
  }, []);

  const handleDelete = async (driverId) => {
    try {
      await deleteDriver(driverId);
      setdrivers(drivers.filter(driver => driver._id !== driverId)); // update the state and remove the driver
    } catch (error) {
      seterror(error.message);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="car">
      <h1 className="title">All Drivers</h1>
      <div className="addCar">
        <form className="table-container">
          <table>
            <tbody>
              {drivers.map((driver, index) => (
                <tr key={driver._id}>
                  <td data-label="Index : ">{index + 1}</td>
                  <td data-label="Image : ">
                    <img src={`data:image/png;base64,${driver.image}`} alt={driver.contactNo} style={{ maxWidth: '100px', height: 'auto' }} />
                  </td>
                  <td data-label="Contact No : "> {driver.contactNo}</td>
                  <td data-label="Address : "> {driver.address}</td>
                  <td data-label="Aadhar Card : "> <img src={`data:image/png;base64,${driver.aadharImage}`} alt={driver.contactNo} style={{ maxWidth: '100px', height: 'auto' }} /></td>
                  <td data-label="Driving License :"> <br /><img src={`data:image/png;base64,${driver.drivingLicenseImage}`} alt={driver.contactNo} style={{ maxWidth: '100px', height: 'auto' }} /></td>
                  <td data-label="Car Assigned :   "> <br />{driver.carAssigned}</td>
                  <td data-label="Action "><button type="button" onClick={() => handleDelete(driver._id)}>Delete</button></td>
                  <br />
                  <br />
                </tr>
              ))}
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
};

export default Driver;

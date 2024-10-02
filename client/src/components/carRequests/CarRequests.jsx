import React, { useState, useEffect } from 'react';
import { getCarRequests } from '../../services/api';

const CarRequests = () => {
  const [carRequests, setCarRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCarRequests = async () => {
      try {
        const carRequestData = await getCarRequests();
        console.log('API Response:', carRequestData); // Log the response
        setCarRequests(carRequestData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchCarRequests();
  }, []);
  

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="car">
      <h1 className='title'>Car Requests</h1>
      <div className="addCar">
        <form className='table-container'>
          <table>
            <thead>
              <tr>
                <th style={{ width: "0%", padding: "0px" }}>Index</th>
                <th>Name</th>
                <th>Contact No</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Driving License</th>
                <th>Email</th>
                <th>car ID</th>
                <th colSpan={2}>Action</th>
              </tr>
            </thead>
            <tbody>
              {carRequests.map((request, index) => (
                <tr key={request._id}>
                  <td>{index + 1}</td>
                  <td>{request.name}</td>
                  <td>{request.contact}</td>
                  <td>{request.startDate}</td>
                  <td>{request.endDate}</td>
                  <td>{request.drivingLicense}</td>
                  <td>{request.email}</td>
                  <td>{request.carId}</td>
                  <td><button type="button">Call</button></td>
                  <td><button type="button">Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
};

export default CarRequests;

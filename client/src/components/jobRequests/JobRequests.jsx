import React, { useState, useEffect } from 'react';
import { getJobRequests } from '../../services/api';

const JobRequests = () => {
  const [jobRequests, setJobRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobRequests = async () => {
      try {
        const jobRequestData = await getJobRequests();
        console.log('API Response:', jobRequestData); // Log the response
        setJobRequests(jobRequestData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchJobRequests();
  }, []);
  

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="car">
      <h1 className='title'>Job Requests</h1>
      <div className="addCar">
        <form className='table-container'>
          <table>
            <thead>
              <tr>
                <th style={{ width: "0%", padding: "0px" }}>Index</th>
                <th>Name</th>
                <th>Contact No</th>
                <th>Email</th>
                <th>Driving License</th>
                <th colSpan={2}>Action</th>
              </tr>
            </thead>
            <tbody>
              {jobRequests.map((request, index) => (
                <tr key={request._id}>
                  <td>{index + 1}</td>
                  <td>{request.name}</td>
                  <td>{request.contact}</td>
                  <td>{request.email}</td>
                  <td>{request.licenseNumber}</td>
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

export default JobRequests;
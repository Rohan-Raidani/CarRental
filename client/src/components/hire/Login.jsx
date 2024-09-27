import { useState } from 'react';
import '../login/login.css'

import { addHire } from '../../services/api';

const Login = () => {
  const initialHireData = {
    name: '',
    email: '',
    contact: '',
    licenseNumber: '',
  }

 const [hireData, setHireData] = useState(initialHireData);

  const handleChange = (e) => {
    setHireData({
      ...hireData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to server)
    // setHireData(initialHireData)
    await addHire(hireData)
    console.log(hireData);
  };

  return (
    <div className="driver-form-container">
      <h2>Driver Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={hireData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contact">Contact:</label>
          <input
            type="number"
            id="contact"
            name="contact"
            value={hireData.contact}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={hireData.email}
            onChange={handleChange}
            required
          />
        </div>
        {/* Add more input fields for phone number, address, etc. */}
        <div className="form-group">
          <label htmlFor="licenseNumber">License Number:</label>
          <input
            type="text"
            id="licenseNumber"
            name="licenseNumber"
            value={hireData.licenseNumber}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
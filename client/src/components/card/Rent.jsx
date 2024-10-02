import React from 'react';
import '../login/login.css';

import { addRequest } from '../../services/api';

const Rent = ({ onClose, formData, setFormData }) => {
  const initialFormData = {
    name: '',
    email: '',
    contact: '',
    licenseNumber: '',
  }
  const handleChange = (event) => {
    setFormData(prevData => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Form data being submitted:", formData);
    try {
      setFormData(initialFormData)
      const response = await addRequest(formData);
      console.log("Server response:", response);
      onClose();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="driver-form-container">
      <h2>Rent Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
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
            value={formData.contact}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="startDate">Start Date:</label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="endDate">End Date:</label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="drivingLicense">Driving License:</label>
          <input
            type="text"
            id="drivingLicense"
            name="drivingLicense"
            value={formData.drivingLicense}
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
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="carId">Car ID:</label>
          <input
            type="text"
            id="carId"
            name="carId"
            value={formData.carId}
            readOnly // Keep it read-only if you don't want users to change it
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Rent;

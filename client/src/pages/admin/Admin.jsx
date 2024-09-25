import React, { useState } from 'react';
import './admin.css';
import { addCar,addDriver } from '../../services/api';
import { convertImageToBase64 } from '../../../public/assets/convertImage'; // Adjust the path as needed
import imageCompression from 'browser-image-compression'

const Admin = () => {
  const initialCarData = {
    image: '',
    name: '',
    price: '',
    fuelType: 'petrol',
    gearType: 'automatic',
    mileage: '',
  };

  const initialDriverData = {
    image: '',
    contactNo: '',
    address: '',
    aadharImage: '',
    drivingLicenseImage: '',
    carAssigned: '',
  };

  const [carData, setCarData] = useState(initialCarData);
  const [driverData, setDriverData] = useState(initialDriverData);

  const handleCarChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {

         // Compress the image
      const compressedFile = await imageCompression(file, {
        maxSizeMB: 1, // Set maximum size in MB
        maxWidthOrHeight: 1920, // Set max width/height
        useWebWorker: true,
      });

       // Convert compressed image to Base64
      const base64 = await convertImageToBase64(compressedFile);
      setCarData({ ...carData, image: base64 });
    } catch (error) {
      console.error(error.message);
    }
    } else {
      setCarData({ ...carData, image: '' });
    }
  };

  const handleDriverChange = async (e) => {
    const { name, files } = e.target;
    if (name === 'image' || name === 'aadharImage' || name === 'drivingLicenseImage') {
      const file = files[0];
      if (file) {
        try {
          
          // Compress the image
        const compressedFile = await imageCompression(file, {
          maxSizeMB: 1,
          maxWidthOrHeight: 1920,
          useWebWorker: true,
        });

        // Convert compressed image to Base64
        const base64 = await convertImageToBase64(compressedFile);
        setDriverData({ ...driverData, [name]: base64 });
        } catch (error) {
          console.error(error.message);
        }
      } else {
        setDriverData({ ...driverData, [name]: '' });
      }
    } else {
      setDriverData({ ...driverData, [name]: e.target.value });
    }
  };

  const handleSubmitCar = async (e) => {
    e.preventDefault();
    // console.log(carData);
    // Reset car data to initial state
    setCarData(initialCarData);
    await addCar(carData)
  };

  const handleSubmitDriver = async (e) => {
    e.preventDefault();
    console.log(driverData);
    // Reset driver data to initial state
    setDriverData(initialDriverData);
    await addDriver(driverData)
  };

  return (
    <div className="admin">
      <h1 className='title'>Welcome Rahul</h1>
      
      <div className="addCar">
        <h2>Add New Car</h2>
        <form className='form' onSubmit={handleSubmitCar}>
          <table>
            <thead>
              <tr>
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
              <tr>
                <td><input type="file" name="image" onChange={handleCarChange} /></td>
                <td><input type="text" name="name" placeholder="Enter Car Name" value={carData.name} onChange={(e) => setCarData({ ...carData, name: e.target.value })} /></td>
                <td><input type="number" name="price" placeholder="Enter Price" value={carData.price} onChange={(e) => setCarData({ ...carData, price: e.target.value })} /></td>
                <td><select name="fuelType" value={carData.fuelType} onChange={(e) => setCarData({ ...carData, fuelType: e.target.value })}>
                    <option value="petrol">Petrol</option>
                    <option value="diesel">Diesel</option>
                    <option value="cng">CNG</option>
                    <option value="ev">EV</option>
                  </select></td>
                <td><select name="gearType" value={carData.gearType} onChange={(e) => setCarData({ ...carData, gearType: e.target.value })}>
                    <option value="automatic">Automatic</option>
                    <option value="manual">Manual</option>
                  </select></td>
                <td><input type="number" name="mileage" placeholder="Enter Mileage" value={carData.mileage} onChange={(e) => setCarData({ ...carData, mileage: e.target.value })} /></td>
                <td><button type="submit">Add Car</button></td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>

      <div className="addDriver">
        <h2>Add New Driver</h2>
        <form className='form' onSubmit={handleSubmitDriver}>
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Contact No</th>
                <th>Address</th>
                <th>Aadhar Image</th>
                <th>Driving License Image</th>
                <th>Car Assigned</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><input type="file" name="image" onChange={handleDriverChange} /></td>
                <td><input type="text" name="contactNo" placeholder="Enter Contact No" value={driverData.contactNo} onChange={(e) => setDriverData({ ...driverData, contactNo: e.target.value })} /></td>
                <td><input type="text" name="address" placeholder="Enter Address" value={driverData.address} onChange={(e) => setDriverData({ ...driverData, address: e.target.value })} /></td>
                <td><input type="file" name="aadharImage" onChange={handleDriverChange} /></td>
                <td><input type="file" name="drivingLicenseImage" onChange={handleDriverChange} /></td>
                <td><input type="text" name="carAssigned" placeholder="Enter Car Assigned" value={driverData.carAssigned} onChange={(e) => setDriverData({ ...driverData, carAssigned: e.target.value })} /></td>
                <td><button type="submit">Add Driver</button></td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
}

export default Admin;

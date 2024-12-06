import React, { useState } from 'react';
import './admin.css';
import { addCar, addDriver } from '../../services/api';
import { convertImageToBase64 } from '../../../public/assets/convertImage'; // Adjust the path as needed
import imageCompression from 'browser-image-compression';

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
    // Reset car data to initial state
    setCarData(initialCarData);
    await addCar(carData);
  };

  const handleSubmitDriver = async (e) => {
    e.preventDefault();
    // Reset driver data to initial state
    setDriverData(initialDriverData);
    await addDriver(driverData);
  };

  return (
    <div className="admin">
      <h1 className="title">Welcome Rahul</h1>

      <div className="addCar">
        <h2>Add New Car</h2>
        <form className="form" onSubmit={handleSubmitCar}>
          <table>
            <thead>
              <tr>
                <th>
                  Image : 
                  <input type="file" name="image" onChange={handleCarChange} />
                </th>
                <th>
                  Car Name
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Car Name"
                    value={carData.name}
                    onChange={(e) => setCarData({ ...carData, name: e.target.value })}
                    />
                </th>
                <th>
                  Price
                  <input
                    type="number"
                    name="price"
                    placeholder="Enter Price"
                    value={carData.price}
                    onChange={(e) => setCarData({ ...carData, price: e.target.value })}
                  />
                </th>
                <th>
                  Fuel Type
                  <select
                    name="fuelType"
                    value={carData.fuelType}
                    onChange={(e) => setCarData({ ...carData, fuelType: e.target.value })}
                  >
                    <option value="petrol">Petrol</option>
                    <option value="diesel">Diesel</option>
                    <option value="cng">CNG</option>
                    <option value="ev">EV</option>
                  </select>
                </th>
                <th>
                  Gear Type
                  <select
                    name="gearType"
                    value={carData.gearType}
                    onChange={(e) => setCarData({ ...carData, gearType: e.target.value })}
                  >
                    <option value="automatic">Automatic</option>
                    <option value="manual">Manual</option>
                  </select>
                </th>
                <th>
                  Mileage
                  <input
                    type="number"
                    name="mileage"
                    placeholder="Enter Mileage"
                    value={carData.mileage}
                    onChange={(e) => setCarData({ ...carData, mileage: e.target.value })}
                  />
                </th>
                <th>
                  Action
                  <button type="submit">Add Car</button>
                </th>
              </tr>
            </thead>
          </table>
        </form>
      </div>

      <div className="addDriver">
        <h2>Add New Driver</h2>
        <form className="form" onSubmit={handleSubmitDriver}>
          <table>
            <thead>
              <tr>
                <th>
                  Image
                  <input type="file" name="image" onChange={handleDriverChange} />
                </th>
                <th>
                  Contact No
                  <input
                    type="text"
                    name="contactNo"
                    placeholder="Enter Contact No"
                    value={driverData.contactNo}
                    onChange={(e) => setDriverData({ ...driverData, contactNo: e.target.value })}
                  />
                </th>
                <th>
                  Address
                  <input
                    type="text"
                    name="address"
                    placeholder="Enter Address"
                    value={driverData.address}
                    onChange={(e) => setDriverData({ ...driverData, address: e.target.value })}
                  />
                </th>
                <th>
                  Aadhar Image
                  <input type="file" name="aadharImage" onChange={handleDriverChange} />
                </th>
                <th>
                  Driving License Image
                  <input type="file" name="drivingLicenseImage" onChange={handleDriverChange} />
                </th>
                <th>
                  Car Assigned
                  <input
                    type="text"
                    name="carAssigned"
                    placeholder="Enter Car Assigned"
                    value={driverData.carAssigned}
                    onChange={(e) => setDriverData({ ...driverData, carAssigned: e.target.value })}
                  />
                </th>
                <th>
                  Action
                  <button type="submit">Add Driver</button>
                </th>
              </tr>
            </thead>
          </table>
        </form>
      </div>
    </div>
  );
}

export default Admin;

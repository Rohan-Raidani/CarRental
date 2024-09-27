import {useState} from 'react'
import '../login/login.css'

const Rent = () => {
    const [formData, setFormData] = useState({
        //Personal Info
        name: '',
        contactInfo: '',
        rentalPeriod: '',
        drivingLicense: '',
        email:"",
        carType:"",
      });
    
      const handleChange = (event) => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission here (e.g., send data to server)
        console.log(formData);
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
              <label htmlFor="name">Contact:</label>
              <input
                type="number"
                id="contactInfo"
                name="contactInfo"
                value={formData.contactInfo}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Start Date:</label>
              <input
                type="date"
                id="rentalPeriod"
                name="rentalPeriod"
            
                value={formData.rentalPeriod}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="carType"> End Date:</label>
              <input
                type="date"
                id="rentalPeriod"
                name="rentalPeriod"
                value={formData.carType}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="name"> Driving License:</label>
              <input
                type="text"
                id=" drivingLicense"
                name=" drivingLicense"
                value={formData. drivingLicense}
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


            <button type="submit">Submit</button>
          </form>
        </div>
      );
}

export default Rent
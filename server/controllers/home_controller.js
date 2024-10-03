const Hire = require("../models/hireRequest");
const CarReq = require("../models/carRequest");
// const Rent = require("../models/carRequest");

module.exports.home = function(req,res) {
    return res.end('<p>Home </p>')
}

module.exports.addhireRequest = async (req, res) => {
    const newHire = new Hire(req.body.hireData);
     try {
         await newHire.save();
         res.status(201).json({ message: 'Car added successfully' });
     } catch (error) {
         res.status(500).json({ message: 'Error adding car', error });
     }
 };

 module.exports.addRentRequest = async (req, res) => {
    console.log("Received request body:", JSON.stringify(req.body, null, 2));
  
  if (req.body.formData) {
    const newRent = new CarReq(req.body.formData);
    console.log("New rent object before save:", JSON.stringify(newRent, null, 2));
    try {
      const savedRent = await newRent.save();
      console.log("Saved rent object:", JSON.stringify(savedRent, null, 2));
      res.status(201).json({ message: 'Rent added successfully', rent: savedRent });
    } catch (error) {
      console.error("Error saving rent to database:", error);
      res.status(500).json({ message: 'Error adding rent', error: error.message });
    }
  } else {
    res.status(400).json({ message: 'Invalid request body for rent' });
  }
  };


 module.exports.getJobRequests = async (req,res) =>{
  try {
      const jobRequests = await Hire.find();
      // console.log(driver);
      
      res.json(jobRequests);
      
  } catch (error) {
      res.status(500).json({ message: err.message });
  }
}

module.exports.getcarRequests = async (req,res) =>{
  try {
      const carRequests = await CarReq.find();
      // console.log(driver);
      
      res.json(carRequests);
      
  } catch (error) {
      res.status(500).json({ message: err.message });
  }
}

// New delete function for car requests
module.exports.deleteCarRequest = async (req, res) => {
  const { id } = req.params;

  try {
      const result = await CarReq.findByIdAndDelete(id);
      if (!result) {
          return res.status(404).json({ message: 'Car request not found' });
      }
      res.status(200).json({ message: 'Car request deleted successfully' });
  } catch (error) {
      console.error('Error deleting car request:', error);
      res.status(500).json({ message: 'Internal server error' });
  }
};

// New delete function for job requests
module.exports.deleteJobRequest = async (req, res) => {
  const { id } = req.params;

  try {
      const result = await Hire.findByIdAndDelete(id);
      if (!result) {
          return res.status(404).json({ message: 'Person request not found' });
      }
      res.status(200).json({ message: 'person request deleted successfully' });
  } catch (error) {
      console.error('Error deleting Person request:', error);
      res.status(500).json({ message: 'Internal server error' });
  }
};
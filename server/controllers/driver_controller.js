const Driver = require('../models/driver')

module.exports.driver = function(req, res) {
    res.end('<p>Driver</p>')
}

module.exports.addDriver = async (req,res) => {
    const newDriver = new Driver(req.body.driverData);
    try {
        await newDriver.save();
        res.status(201).json({ message: 'Driver added successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error adding Driver; ', error });
    }
}

module.exports.getDriver = async (req,res) =>{
    try {
        const driver = await Driver.find();
        // console.log(driver);
        
        res.json(driver);
        
    } catch (error) {
        res.status(500).json({ message: err.message });
    }
}

module.exports.deleteDriver = async (req,res) => {
    const driverId = req.params.id;
    try {
        const deletedDriver = await Driver.findByIdAndDelete(driverId); // Use findByIdAndDelete to remove the car

        if (!deletedDriver) {
            return res.status(404).json({ message: 'Driver not found' });
        }

        res.json({ message: 'Driver deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting driver', error });
    }
}
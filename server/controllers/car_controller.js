const Car = require('../models/car')

module.exports.car = function(req, res) {
    res.end('<p>Car</p>')
}

module.exports.addCar = async (req, res) => {
   const newCar = new Car(req.body.carData);
    try {
        await newCar.save();
        res.status(201).json({ message: 'Car added successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error adding car', error });
    }
};

module.exports.getCar = async (req,res) => {
    try {
        const car = await Car.find();
        // console.log(car);
        
        res.json(car);
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports.deleteCar = async (req,res) => {
    const carId = req.params.id;
    try {
        const deletedCar = await Car.findByIdAndDelete(carId); // Use findByIdAndDelete to remove the car

        if (!deletedCar) {
            return res.status(404).json({ message: 'Car not found' });
        }

        res.json({ message: 'Car deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting car', error });
    }
}

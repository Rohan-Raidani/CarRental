const mongoose = require('mongoose')

const carSchema = new mongoose.Schema({
    image: String,
    name: String,
    price: Number,
    fuelType: String,
    gearType: String,
    mileage: Number,
  },{collection:"cars"});

  const car = mongoose.model('car',carSchema)

  module.exports = car
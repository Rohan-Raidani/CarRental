const mongoose = require('mongoose')

const carRequestSchema = new mongoose.Schema({
    carId:String,
    contact: Number,
    drivingLicense: String,
    email: String,
    endDate: Date,
    name: String,
    startDate: Date,
  },{collection:"carRequests"});

  const carRequest = mongoose.model('carRequest',carRequestSchema)

  module.exports = carRequest;
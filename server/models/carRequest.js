const mongoose = require('mongoose')

const carRequestSchema = new mongoose.Schema({
    name: String,
    contact: Number,
    startDate: Date,
    endDate: Date,
    drivingLIcense: String,
    email: String,
  },{collection:"carRequests"});

  const carRequest = mongoose.model('carRequest',carRequestSchema)

  module.exports = carRequest;
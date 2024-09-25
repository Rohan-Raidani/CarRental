const mongoose = require('mongoose')

const driverSchema = new mongoose.Schema({
    image: String,
    contactNo: Number,
    address: String,
    aadharImage: String,
    drivingLicenseImage: String,
    carAssigned: String,
  },{collection:"drivers"});

  const driver = mongoose.model('driver',driverSchema)

  module.exports = driver
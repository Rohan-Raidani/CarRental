const mongoose = require('mongoose')

const hireRequestSchema = new mongoose.Schema({
    name: String,
    contact: Number,
    email: String,
    drivingLIcense: String,
  },{collection:"hireRequests"});

  const hireRequest = mongoose.model('hireRequest',hireRequestSchema)

  module.exports = hireRequest;
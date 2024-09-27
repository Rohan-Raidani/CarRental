const Hire = require("../models/hireRequest");
const CarReq = require("../models/carRequest");

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

 module.exports.addcarRequest = async (req, res) => {
    const newCarReq = new CarReq(req.body.carReqData);
     try {
         await newCarReq.save();
         res.status(201).json({ message: 'Car added successfully' });
     } catch (error) {
         res.status(500).json({ message: 'Error adding car', error });
     }
 };
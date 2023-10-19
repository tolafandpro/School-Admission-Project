const Admission = require("../models/admissionModel");
const asyncHandler = require("express-async-handler");


const getAllReg = asyncHandler( async (req, res) => {
    try {
        const getReg = await Admission.find();
        res.json(getReg).status(200);
    } catch (error) {
        throw new Error;
    }
});

const getSingleReg = asyncHandler( async(req, res) => {
    const {id} = req.params;
    try {
        const singleReg = await Admission.findById(id); 
    } catch (error) {
        throw new Error(error);
    }
});


const regAdmission = asyncHandler( async(req, res) => {
     try {
        const regNewAdmission = new Admission(req.body);
        await regNewAdmission.save();
        res.json("Application Submitted").status(200)
     } catch (error) {
        throw new Error("All Marked feild is required");
     }
} );

module.exports = {getAllReg, getSingleReg, regAdmission }
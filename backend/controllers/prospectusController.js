const asyncHandler = require("express-async-handler");
const Prospectus = require("../models/prospectus.Model");

const getAllProspectus = asyncHandler( async (req, res) => {
    try {
        const getProspectus = await Prospectus.find();
        res.json(getProspectus)
    } catch (error) {
        throw new Error(error);
    }
})

const createProspesctus = asyncHandler( async (req, res) => {
    try {
        const newProsReq = await Prospectus.create(req.body);
        await newProsReq.save()
        res.json(newProsReq).status(200);   
    } catch (error) {
        throw new Error(error);
    }
})

const deleteProspesctus = asyncHandler(async (req, res) => {
    // const {id} = req.params
    try {
        await Prospectus.findByIdAndDelete(req.params.id);
        res.status(200).json("Prospectus deleted successfully");
    } catch (error) {
        throw new Error(error);
    }
});


module.exports = {getAllProspectus, createProspesctus, deleteProspesctus}
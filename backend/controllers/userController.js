const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");

const getAllUsers = asyncHandler( async (req, res) => {
    try{
        const users = await User.find();
        res.json(users);
    } catch (error) {
        throw new Error(error);
    }
});

// Find a single user function
const getSingleUser = asyncHandler( async (req, res) => {
    const {id} = req.params;
    try {
        const singleUser = await User.findById(id);
        if (!singleUser) {
            res.json("Invalid User ID")
        } else {
            res.json(singleUser).status(200);
        }
    } catch (error) {
        throw new Error(error);
    }
});

// Update users Profile
const updateUsers = asyncHandler( async (req, res) => {
    const {id} = req.params;
    try {
        const updateUser = await User.findByIdAndUpdate(id, {$set: req.body}, {new: true} )
        res.json(updateUser);
    } catch (error) {
        throw new Error("")
    }
});

// Delete users function
const deleteUsers = asyncHandler(async (req, res) => {
    const {id} = req.params;
    try {
        const deleteUser = await User.findOneAndDelete(id)
        res.json("User has been deleted").status(200);
    } catch (error) {
        throw new Error(error)
    }
}) 




module.exports = {getAllUsers, getSingleUser, updateUsers, deleteUsers};
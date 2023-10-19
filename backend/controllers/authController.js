const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../config/jwtToken");

// To register a User
const registerUser = asyncHandler( async (req, res , next) => {
    const { email } = req.body;
    const regUser = await User.findOne({email});
    try {
        if (!regUser) {
            const newUser = User.create(req.body);
            await newUser.save();

            const {password, ...others} = newUser._doc;
            res.status(201).json("User has been created", others);
        }
    } catch (error) {
        throw Error("Email already exsist");
    }
});;

// To Login a user 
const loginUser = asyncHandler( async (req, res, next) => {
    const {email, password} = req.body;
    // Checking if the user exsist in the db
    try {
        const findUser = await User.findOne({email});
    if(findUser && (await findUser.isPasswordMatch(password))) {
        const refreshToken = await generateToken(findUser._id);
        const updateUser = await User.findByIdAndUdate(findUser._id, {refreshToken: refreshToken}, {new: true});
        res.json({
            _id: findUser._id,
            firstname: findUser.firstname,
            lastname: findUser.lastname,
            email: findUser.email,
            mobile: findUser.mobile,
            token: generateToken(findUser._id)

        }).status(200);
    }
    } catch (error) {
        throw new Error("Invalid Credentials");
    }
   
});

// User Logout function
const logoutUse = asyncHandler( async(req, res) => {
    console.log("logout");
} );

module.exports = {registerUser, loginUser};
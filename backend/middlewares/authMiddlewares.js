const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");


const authMiddleware = asyncHandler( async (req, res, next) => {
    let token;
    if(req.headers.authorization.startsWith("Bearer")) {
        token = req.headers.authorization.split("")[1];
        try {
            if(token) {
                const decode = jwt.verify(token, process.env.SECRET_KEY);
                const user = await User.findById(decode.id);
                req.user = user;
                next();
                
            }
        } catch (error) {
            throw new Error("User not Authorized, token expired kindly login");
        }
    }
     else {
        throw new Error("There is no token attached to the header")
    }
});

// This Middlerware is to verify a user or an admin.
const isAdmin = asyncHandler( async (req, res) => {
  const {email} = req.user;
  const adminUser = User.findOne({email});

  if(adminUser.role !== "admin") {
    throw new Error("You don't have admin Access");
  } else {
    next()
  }
    
});


module.exports = {authMiddleware, isAdmin}
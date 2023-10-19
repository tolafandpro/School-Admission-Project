const mongoose = require("mongoose");


const dbConnection = async () => {
    try {
        mongoose.connect(process.env.MONGO);
        console.log("Connected to mongoDB");
    } catch (error) {
        console.log("Unable to connect to the database");
        throw (error);
    }
};


module.exports = dbConnection;
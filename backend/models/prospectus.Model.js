const mongoose = require('mongoose'); 

// Declare the Schema of the Mongo model
const prospectusSchema = new mongoose.Schema({
    firstname:{
        type:String,
        min: 3,
        required:true,
    },
    lastname:{
        type:String,
        min: 3,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    mobile:{
        type:String,
        required:true,
        unique:true,
    },
    prospectus:{
        type:String,
        required:true,
    },
},
{timestamps: true}
);

//Export the model
module.exports = mongoose.model('prospectus', prospectusSchema);
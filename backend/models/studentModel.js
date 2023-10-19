const mongoose = require("mongoose");


const studentSchema = new mongoose.Schema({
    surname: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    otherNames: {
        type: String
    },
    schoolName: {
        type: String,
        required: true,
    },
    SchoolName: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Students", studentSchema);

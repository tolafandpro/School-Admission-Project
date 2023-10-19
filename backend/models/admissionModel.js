const mongoose = require("mongoose");


const admissionSchema = mongoose.Schema({
    surname: {
        type: String,
        required: true,
        trim: true,
    },
    firstname: {
        type: String,
        required: true,
        trim: true,
    },
    othername: {
        type: String,
        required: true,
        trim: true,
    },
    dob: {
        type: Date,
        required: true,
        trim: true
    },
    gender: {
        type: String,
        required: true,
    },
    sibling: {
        type: String,
    },
    schoolName: {
        type: String,
        required: true,
    },
    schoolAddress: {
        type: String,
        required: true,
    },
    presentClass: {
        type: String,
        required: true
    },
    examLocation: {
        type: String,
        require: true,
    },
    fatherName: {
        type: String,
        require: true,
    },
    motherName: {
        type: String,
        require: true,
    },
    fatherEmail: {
        type: String,
        require: true,
        trim: true,
    },
    motherEmail: {
        type: String,
        require: true,
        trim: true,
    },
    fatherTel: {
        type: Number,
        require: true,
        trim: true,
    },
    motherTel: {
        type: Number,
        require: true,
        trim: true,
    },
    parentsAddress: {
        type: String,
        require: true,
    },
    knowAbout: {
        type: String,
        require: true,
    },
    refreeName: {
        type: String,
        require: true,
    },
    refreeNumber: {
        type: Number,
        require: true,
        trim: true,
    },
    refreeEmail: {
        type: String,
        require: true,
        trim: true,
    },

},
{timestamps: true});

module.exports = mongoose.model("Admission", admissionSchema);
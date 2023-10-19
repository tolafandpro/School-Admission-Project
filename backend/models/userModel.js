const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        uniqe: true,
        min: 3
    },
    mobile: {
        type: Number,
        required: true,
        uniqe: true,
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "user",
    },
    isBlocked: {
        type: Boolean,
        default: false,
    },
},
{timestamps: true}
);

userSchema.pre("save", async function (next) {
    const salt = bcrypt.genSalt(10);
    this.password = bcrypt.hash(this.password, salt);
});

userSchema.methods.isPasswordMatch = async function (enterPassword) {
    return await bcrypt.compare(enterPassword, this.password);
}

module.expoorts = userSchema;
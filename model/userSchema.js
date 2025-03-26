const mongoose = require('mongoose');

const newSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {type: String,
        required: true
    },
}, {timestamps: true});

const User = mongoose.model("User",newSchema);
module.exports = User;

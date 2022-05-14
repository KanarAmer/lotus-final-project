const mongoose = require("mongoose")

//users schema
const Schema = mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    lastMenstruation: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("user", Schema);
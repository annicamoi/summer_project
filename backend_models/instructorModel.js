const mongoose = require("mongoose");

const instructorSchema = {
    name: String,
    rank: String,
    title: String
}

const Instructor = mongoose.model("Instructor", instructorSchema);

module.exports = Instructor;
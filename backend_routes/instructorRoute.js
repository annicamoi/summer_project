const express = require("express");
const router = express.Router();
const Instructor = require("../backend_models/instructorModel");

router.route("/add").post((req, res) => {
    const name = req.body.name;
    const rank = req.body.rank;
    const title = req.body.title;
    const newInstructor = new Instructor({
        name,
        rank,
        title
    });

    newInstructor.save();
});

router.route("/instructors").get((req, res) => {
    Instructor.find()
    .then(foundInstructors => res.json(foundInstructors));
});

module.exports = router;
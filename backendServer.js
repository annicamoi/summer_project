const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://admin:m0ng053cr3t@cluster0.cuvt7.mongodb.net/myFirstDatabase", { useNewUrlParser: true, useUnifiedTopology: true });

app.use("/", require("./backend_routes/instructorRoute"));

app.listen(3001, function() {
    console.log("Express server running on port 3001");
})
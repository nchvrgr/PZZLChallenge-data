require("dotenv").config();

const express = require("express");
const app = express();

const cors = require("cors");

app.use(cors());

const port = process.env.PORT || 5000;

const data = require('./data.json');

app.get("/", (req, res) => {
    res.json(data);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
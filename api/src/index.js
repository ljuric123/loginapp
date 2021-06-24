const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv")

const middleware = require("./middleware/middleware");
const auth = require("../src/auth/auth.js");

dotenv.config();



const app = express();

app.use(morgan("common"));
app.use(cors());

mongoose.connect("mongodb://localhost:27017/auth", {useNewUrlParser: true});

app.use(express.json());

app.use("", auth)

app.use(middleware.notFound);
app.use(middleware.errorHandler);

const port = process.env.PORT || 3000;
app.listen(port, () =>{
    console.log('Server is running at https://localhost:' + port);
})

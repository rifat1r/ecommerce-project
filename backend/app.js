const express = require("express");
const errorMiddleware = require("./middleware/error");
const cookieParser = require("cookie-parser");

const app = express();

//middeware
app.use(express.json());
app.use(cookieParser());

//routes
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");

app.use("/api/v1", product);
app.use("/api/v1", user);

// middleware for error
app.use(errorMiddleware);

module.exports = app;

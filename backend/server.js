const app = require("./app");

const dotenv = require("dotenv");
const connectDB = require("./config/database");

// handling uncaught exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("shutting down server due to  uncaught exception");
  process.exit(1);
});

//config
dotenv.config({ path: "backend/config/config.env" });
//connectDb
connectDB();

const server = app.listen(process.env.PORT, () => {
  console.log(`server is working on http://localhost:${process.env.PORT}`);
});

// console.log(youtube);
//unhandled promise rejection
process.on("unhandledRejection", (error) => {
  console.log(`Error : ${error.message}`);
  console.log("shutting down server due to unhandled promise regection");
  server.close(() => {
    process.exit(1);
  });
});

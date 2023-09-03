const dotenv = require("dotenv");
dotenv.config();

// app 
const app = require("./app");
//database
const connect = require("./config/db");

app.listen(process.env.PORT, async () => {
  try {
    await connect();
    console.log("Server is running on Port on", process.env.PORT);
  } catch (error) {
    console.log(error.message)
  }
});

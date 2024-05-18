import mongoose from "mongoose"


function dbConnection() {
  mongoose.connect('mongodb://localhost:27017/BC12E-commerce')
  .then(() => console.log("database connection established ✔"))
  .catch((err) => console.log("error to connect with database", err));
}

export default dbConnection
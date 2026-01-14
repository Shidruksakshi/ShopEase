import mongoose from "mongoose";

//connect our Node.js backend to a MongoDB database

const DbConnect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/cnc"); // This link we copied from MongoDb Compass
    console.log("Database connected successfully...");
  } catch (error) {
    console.error("Database connection failed:", error.message);
  }
};


export default DbConnect;

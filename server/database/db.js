import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const DBConnection = async () => {
  const USERNAME = process.env.DB_USERNAME;
  const PASSWORD = process.env.DB_PASSWORD;
  const MONODB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.aswnazi.mongodb.net/?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(MONODB_URI, { useNewUrlParser: true });
    console.log("database connected successfully");
  } catch (error) {
    console.error("Error while connecting with the database", error.message);
  }
};

export default DBConnection;

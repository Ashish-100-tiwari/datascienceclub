import mongoose from "mongoose";

let isConnected = false;

export const connectToDataBase = async () => {
  if (isConnected) {
    console.log("DB connected already");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName:process.env.DB_NAME,
    });
    isConnected = true;
    console.log("DB connected successfully");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};

export const isDatabaseConnected = () => {
  return isConnected;
};

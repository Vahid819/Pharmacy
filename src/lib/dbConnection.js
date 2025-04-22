import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    if (mongoose.connection.readyState >= 1) {
      console.log("MongoDB is already connected");
      return;
    }

    const dburl = process.env.MONGODB_URL;

    if (!dburl) {
      throw new Error("MongoDB URL is not defined in environment variables");
    }

    await mongoose.connect(process.env.MONGODB_URL);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw new Error("MongoDB connection failed");
  }
};

export default dbConnection

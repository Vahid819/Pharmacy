import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 1) {
      console.log("Already connected to the database");
      return;
    }
    const dbURI = process.env.MONGODB_URL;
    if (!dbURI) {
      throw new Error("Database URI not found in environment variables");
    }

    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to the database successfully");
    
  } catch (error) {
    console.error("Database connection error:", error);
    throw new Error("Database connection failed");
    
  }
};


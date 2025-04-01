import mongoose from "mongoose";

const connection = {
  isConnected: false,
};
export default async function connectDB() {
  if (connection.isConnected) {
    console.log("Already connected to MongoDB");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    connection.isConnected = mongoose.connection[0].readyState;
    console.log("Connected to MongoDB Successfully...");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw new Error("Failed to connect to MongoDB");
  }
}

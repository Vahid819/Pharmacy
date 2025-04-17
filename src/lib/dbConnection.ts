import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?: number | null;
}

const connection : ConnectionObject = {
}


async function dbConnect(): Promise<void> {
    if(connection.isConnected){
        console.log("Already connected to MongoDB");
        return;
    }

    try {
        const db = await mongoose.connect(process.env.MONGODB_URL as string,)

        connection.isConnected = db.connections[0].readyState;
        console.log("MongoDB connected successfully", connection.isConnected);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1)
        
    }
}

export default dbConnect;
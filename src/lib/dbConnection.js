import mongoose from "mongoose";
let connection = null | global;
const dbConnection = async () => {
  try {
    if (connection) {
      console.log("database already connected");
      return;
    }
    const url = process.env.MONGODB_URL;

    if (!url) {
      console.log("please provide the mongodb url ");
      return;
    }

    connection = await mongoose.connect(url);

    console.log("database connected succesfully");
  } catch (error) {
    console.log(error.messsage);
  }
};

export default dbConnection;

import mongoose from "mongoose";
const mongoURL = process.env.MONGO_URL;
export const connectMongoDB = async () => {
  try {
    const conn = await mongoose.connect(mongoURL);
    conn && console.log("DB connected");
  } catch (error) {
    console.log(error);
  }
};

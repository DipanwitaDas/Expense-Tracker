import mongoose from "mongoose";

const db = async()=>{
    try {
        await mongoose.connect("mongodb+srv://dipanwitadas2442004:dipanwitaDas@cluster1.lgu6ris.mongodb.net/");
        console.log("MongoDB Connected")
    } catch (error) {
        console.log("MongoDB connection error")
    }
}
export default db;
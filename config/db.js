import mongoose from "mongoose";
import colors from 'colors';
const connectDB = () => {
    try {
        const conn = await mongoose.connect()
    } catch (error) {
        console.log(error)
    }
}
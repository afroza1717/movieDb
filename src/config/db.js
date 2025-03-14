import dotenv from 'dotenv';
import mongoose from 'mongoose';

//To access the env properties
dotenv.config();

//Function to connect with database 
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI , {
            dbName:'movie-db',
            appName:'movie-db'

        
        })
        console.log("Database connected succesfully");
    } catch (error) {
        console.error(error);
    }
};

export default connectDB;
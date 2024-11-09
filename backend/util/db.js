import mongoose  from "mongoose";

const connectDB = async()=>{
    try {
        
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Database connect successfully!");
        

    } catch (error) {
        console.log("Data base connect error: ", error);
        
        
    }
}

export default connectDB;

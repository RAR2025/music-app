import mongoose from 'mongoose'
export const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.mongo_database);
        console.log(`Connected to MongoDb ${conn.connection.host}`)
    }catch (error){
        console.log("Failed to connect to mongodb", error)
        process.exit(1);
    }
}
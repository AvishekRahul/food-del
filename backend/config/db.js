import mongoose from "mongoose";
export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://rahulavishek444:Avishek9938@cluster0.8p0enuk.mongodb.net/food-del').then(()=>console.log("db connected"))
}
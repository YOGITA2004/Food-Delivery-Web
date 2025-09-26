import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://yogitasingh02102004_db_user:Yogimilky@cluster0.di2834k.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}
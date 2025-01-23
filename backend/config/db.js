import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://anjali12:kyQJR9DoBbaPggFI@cluster0.llxp9.mongodb.net/food-del ').then(()=>console.log("DB Connected"));
}



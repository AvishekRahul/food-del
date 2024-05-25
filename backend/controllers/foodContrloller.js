import { Console } from "console";
import foodModel from "../models/foodmoadels.js";
import fs from 'fs';

//add food item

const addFood=async(req,res)=>{
let image_filename =`${req.file.filename}`;
const food = new foodModel({
    name:req.body.name,
    description:req.body.description,
    price:req.body.price,
    category:req.body.ctegory,
    image:image_filename
})
try {
    await food.save();
    res.json({succsess:true,message:"food added"})
} catch (error) {
    console.log(error)
    res.json({succsess:false,message:"Error"})
}
}
// all food list
const listFood= async (req,res)=>{
try {
    const foods=await foodModel.find({});
    res.json({success:true,data:foods})
} catch (error) {
    Console.log(error);
    res.json({success:false,message:"Error"})

}
}
const removeFood =async (req,res)=>{
try {
    const food =await foodModel.findById(req.body.id);
    fs.unlink(`uploads/${food.image}`,()=>{})
   await foodModel.findByIdAndDelete(req.body.id);
   res.json({success:true,message:"food removed"}) 
} catch (error) {
    console.log(error);
    res.json({success:false,message:"Error"})
}
}

export {addFood,listFood,removeFood}
import foodModel from "../models/foodModel.js";
import fs from 'fs'

// add food item

// whenever we will hit this api in the body we will send the below details and we can access it using this function
 
const addFood = async (req,res) => {
    
    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })
    try {
        // using this method food item can be saved in the database
        await food.save();
        // this is the respnse
        res.json({success:true,message:"Food Added"})
    } catch (error) {
        // it we get any error while saving the food in that case catch block will bw executed
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

// all food list
const listFood = async (req,res) =>{
    try {
        const foods = await foodModel.find({});
        res.json({success:true,data:foods})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

// remove food item
const removeFood = async(req,res) => {
    try {
        // used to find the food using id
        const food = await foodModel.findById(req.body.id);
        // using this we can delete the image form the folder
        fs.unlink(`uploads/${food.image}`,()=>{})

        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Food Removed"})

    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}
export {addFood,listFood,removeFood}
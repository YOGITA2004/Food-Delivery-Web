import express from "express"
import { addFood,listFood,removeFood} from "../controllers/foodController.js"
import multer from "multer"

const foodRouter = express.Router();

// Image Storage Engine
const storage = multer.diskStorage({
    destination: "uploads",
    filename:(req,file,cb)=>{
        // storage has been created whenever we will upload any file the time steamp is added in the file original name 
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

// middlerware upload has been created where we can stoarage the image in upload folder
const upload = multer({storage:storage})
// this is the middleware to upload the image 

// need to unpload file can be done using the post method
foodRouter.post("/add",upload.single("image"),addFood)
foodRouter.get("/list",listFood)
foodRouter.post("/remove",removeFood);










export default foodRouter;
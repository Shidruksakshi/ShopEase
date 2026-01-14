import express from 'express'
import { Addproduct, ProductData } from '../controller/ProductController.js';
import upload from '../middleware/multer.js';


const router = express.Router();


router.get("/product", upload.single("img"), ProductData) // DATABASE => CLIENT 


export default router
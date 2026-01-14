import express from 'express'
import { addCategory, addSubcategory, getCategories } from '../controller/CatController.js';



const router = express.Router();

router.post("/add",addCategory);

router.get("/get",getCategories);

//add for existing subcat

router.put("/add-subcategory/:categoryId", addSubcategory);   


export default router
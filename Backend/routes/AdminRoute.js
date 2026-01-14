import express from "express";
import { loginAdmin } from "../controller/AdminController.js";
import { adminAuth } from "../middleware/adminAuth.js";
import Products from "../models/ProductModel.js";
import User from "../models/UserModel.js";
import { Addproduct } from "../controller/ProductController.js";
import upload from "../middleware/multer.js";



const router = express.Router();

// One-time register
// router.post("/register", registerAdmin); // just for one time register for authentication 

// Login
router.post("/loginadmin", loginAdmin);
router.post(
  "/addproduct",
  adminAuth,
  upload.single("image"), // 👈 THIS WAS MISSING
  Addproduct
);

router.post("/userdata",adminAuth, );

// Protected route example


router.get("/userdata", adminAuth,async (req, res) => {
 
  const data =await User.find()

  res.status(200).json({
    msg:"Data send succesfully..",
    data
  })
});

router.get("/products", adminAuth, async(req, res) => {
 try {
    const pdata = await Products.find();

    return res.status(200).json({
      msg: "Product Data sent successfully",
      pdata
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
});



export default router;

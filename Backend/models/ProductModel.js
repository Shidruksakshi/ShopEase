import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true,
      trim: true
    },
    price: {
      type: Number,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    subcategory:{
      type:String,
      required: true
    },
    Brand:{
      type: String,
      required:true
    },
    color:{
      type:String,
      required:true
    },
    size:{
      type:String,
      required:true
    },
    stock: {
      type: Number,
      default: 0     
    },
    img:{
      type:String
    }

  
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;

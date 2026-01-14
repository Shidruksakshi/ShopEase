import Products from "../models/ProductModel.js";


export const ProductData = async (req, res) => {
 try{
  const {category } = req.query;

  let filter={}

  if(category){
    filter.category  = category
  }

  const pdata = await Products.find(filter)

  return res.status(200).json({
      msg: "Product Data sent successfully",
      pdata
    });
 }
 catch(error){
  console.error(error);
  return res.status(500).json({message:"Server error"})

 }
};


export const Addproduct = async (req, res) => {
  try {
    const { name, description, price, category, stock,Brand,color,subcategory,size } = req.body; // ADMIN 

     const img = req.file ? req.file.filename : null;
    // corrected validation
    if (!name || !description || !price || !category || !stock || !Brand || !color || !subcategory || !size || !img) {
      return res.status(400).json({ message: "All fields are required!" });
    }

   

    // save product
    const newProduct = new Products({
      name,
      description,
      price,
      category,
      subcategory,
      Brand,
      color,
      stock,
      size,
      img : req.file ? req.file.filename : null,
    });

    await newProduct.save();

    return res.status(201).json({
      message: "Product added successfully!",
      product: newProduct
    });

  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};

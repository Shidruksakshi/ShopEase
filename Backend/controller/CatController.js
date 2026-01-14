import Category from "../models/CategoryModels.js";

//  Add Category
export const addCategory = async (req, res) => {
  try {
    const { catname, subcategories, image } = req.body;

    if (!catname) {
      return res.status(400).json({ message: "Category name is required" });
    }

    // Create new category
    const newCategory = new Category({
      catname,
      subcategories: subcategories || [],
      image: image || "",
    });

    const savedCategory = await newCategory.save();
    res.status(201).json({ message: "Category added successfully", category: savedCategory });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get All Categories
export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find().sort({ createdAt: -1 });
    res.status(200).json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Add Subcategory to Existing Category
export const addSubcategory = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const { subcategory } = req.body;

    if (!subcategory) {
      return res.status(400).json({ message: "Subcategory is required" });
    }

    // Push new subcategory if not already present
    const category = await Category.findById(categoryId);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    if (category.subcategories.includes(subcategory)) {
      return res.status(400).json({ message: "Subcategory already exists" });
    }

    category.subcategories.push(subcategory);
    await category.save();

    res.status(200).json({ message: "Subcategory added successfully", category });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

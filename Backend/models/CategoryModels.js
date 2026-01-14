import mongoose from "mongoose";

const catSchema = new mongoose.Schema(
  {
    catname: {
      type: String,
      required: true,
      trim: true,
      
    },

    subcategories: {
      type: [String],
      default: []
    },

    image: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  { timestamps: true }
);

const Category = mongoose.model("Category", catSchema);

export default Category;

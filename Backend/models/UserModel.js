import mongoose from "mongoose";

//model = use the model to create, read, update, delete documents.
//schema = define the structure of the data 

// Create a Mongoose schema  
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,       // Makes this field mandatory
    trim: true            // Removes extra spaces
  },
  email: {
    type: String,
    required: true,
    unique: true,         // Ensures no duplicate emails
    lowercase: true       // Converts email to lowercase
  },
  password: {
    type: String,
    required: true,
    minlength: 6          // Minimum password length
  }
}, { timestamps: true }); // Automatically adds createdAt & updatedAt

// Create a model from the schema
const User = mongoose.model("User", userSchema);

export default User;

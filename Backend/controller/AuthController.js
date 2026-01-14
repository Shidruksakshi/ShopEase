import User from "../models/UserModel.js";
import bcrypt from 'bcrypt'

import jwt from 'jsonwebtoken'
import Products from "../models/ProductModel.js";
const JWT_SECRET = "mysecretkey"


export const Register = async (req, res) => {
  try {
    const { username, email, password } = req.body; ///client kadun 

// res = response object
// status() = tells the browser or frontend whether the request was successful, failed, or had an error.

    // 1️⃣ Basic validation
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

     if(password.length <6){
      return res.status(400).json({message:"Password must be at least 6 characters long"})
    }

    // 2️⃣ Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }


    const Hashpassword = await bcrypt.hash(password,10)

    // 3️⃣ Create new user (password stored as plain text)
    const newUser = new User({
      username,
      email,
      password:Hashpassword
    });

    // 4️⃣ Save user to DB
    await newUser.save();

    // 5️⃣ Send success response
    res.status(201).json({ message: "User registered successfully",newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};



export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // check fields
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }

    // check if user exists
    const alreadyexist = await User.findOne({ email });
    if (!alreadyexist) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    // compare passwords
    const ismatch = await bcrypt.compare(password, alreadyexist.password);
    if (!ismatch) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    // ✅ generate JWT token
    const token = jwt.sign(
      { id: alreadyexist._id, email: alreadyexist.email }, // payload (info inside token)
     JWT_SECRET,                              // secret key
      { expiresIn: "1h" }                                  // optional expiry time
    );

    // send token with response
    res.status(200).json({
      message: "Login successful",
      token: token,
      user: {
        id: alreadyexist._id,
        username: alreadyexist.username,
        email: alreadyexist.email,
      },
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};


export const getUserData = async (req, res) => {
  try {
    // req.user is decoded from JWT (contains id or email)
    const user = await User.findById(req.user.id).select("-password"); 
    // select("-password") removes password field

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "User data fetched successfully",
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};


export const UserDatas =async(req,res)=>{


  const data =await User.find()

  res.status(200).json({
    msg:"Data send succesfully..",
    data
  })



}











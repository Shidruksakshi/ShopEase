import Admin from "../models/AdminModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const Admin_JWT_SECRET = "your_secret_key_here";

// =====================
// ONE-TIME ADMIN REGISTER
// =====================
// export const registerAdmin = async (req, res) => {
//   try {
//     const { name, email, password } = req.body;

  

//     // Check existing admin
//     const adminExists = await Admin.findOne({ email });
//     if (adminExists) {
//       return res.status(400).json({ msg: "Admin already registered!" });
//     }

//     // Hash password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newAdmin = await Admin.create({
//       name,
//       email,
//       password: hashedPassword,
//     });

//     res.status(201).json({ msg: "Admin registered successfully", newAdmin });
//   } catch (error) {
//     res.status(500).json({ msg: "Server Error", error });
//   }
// };


// =====================
// ADMIN LOGIN
// =====================
export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(400).json({ msg: "Admin not found" });
    }

    // Compare password
    const validPassword = await bcrypt.compare(password, admin.password);
    if (!validPassword) {
      return res.status(400).json({ msg: "Invalid password" });
    }

    // Create JWT token
    const token = jwt.sign(
      { id: admin._id, role: admin.role },
      Admin_JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(200).json({
      msg: "Login successful",
      token,
      admin: {
        name: admin.name,
        email: admin.email,
        role: admin.role
      }
    });

  } catch (error) {
    res.status(500).json({ msg: "Server Error", error });
  }
};

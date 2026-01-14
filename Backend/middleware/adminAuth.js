import jwt from "jsonwebtoken";
const Admin_JWT_SECRET = "your_secret_key_here";

export const adminAuth = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ msg: "Access denied. No token provided" });
  }

  try {
    const verified = jwt.verify(token, Admin_JWT_SECRET);

    if (verified.role !== "admin") {
      return res.status(403).json({ msg: "Only Admin can access this route" });
    }

    req.admin = verified; // store admin data
    next();

  } catch (error) {
    res.status(400).json({ msg: "Invalid Token" });
  }
};

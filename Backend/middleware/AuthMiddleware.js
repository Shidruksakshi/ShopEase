import jwt from "jsonwebtoken";
const JWT_SECRET = "mysecretkey"


export const authMiddleware = (req, res, next) => {
  try {
    // 1️⃣ Get token from headers
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No token provided" });
    }

    // 2️⃣ Extract token
    const token = authHeader.split(" ")[1];

    // 3️⃣ Verify token
    const decoded = jwt.verify(token, JWT_SECRET);

    // 4️⃣ Add user info to request (for later use)
    req.user = decoded;   //the data of the logged-in user (like name, email, id, etc.)

    // 5️⃣ Continue to next middleware or route
    next();

  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "Invalid or expired token" });
  }
};

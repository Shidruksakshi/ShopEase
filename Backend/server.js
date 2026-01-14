import express from 'express';
import DbConnect from './config/db.js'; // ensure the path and extension are correct
import AuthRouter from './routes/AuthRoute.js'
import Authproducts from './routes/ProductRoute.js'
import adminRoutes from './routes/AdminRoute.js'
import CatRouter from './routes/CatRoute.js'
import cors from "cors"
const app = express(); //connect external express

// Middleware to parse JSON   parse means =translate data into something the program understands
app.use(express.json());

const corsSystem ={
  origin:"http://localhost:5173",
  Credentials:true,
  method:["POST","GET","PUT","DELETE"]
}

app.use(cors(corsSystem))

app.use("/api/auth",AuthRouter)
app.use("/api/products",Authproducts)
app.use("/api/admin", adminRoutes);
app.use("/api/cat",CatRouter)
app.use("/uploads", express.static("uploads"))

// Route handler
app.get("/api/demo", (req, res) => {
  res.send("This is demo API");
});

// Server port
const PORT = 8000;

// Connect to MongoDB first, then start server
DbConnect()
  .then(() => {
    app.listen(PORT, () => {

      // app.listen to start the server
      console.log(`Server running on port ${PORT}`);                             
    });
  })
  .catch((err) => {
    console.error("Failed to start server:", err.message);
  });


  //app.use() is used for middleware and mounting routers and it
  //  works for all HTTP methods. app.get() 
  // is used to handle a specific GET request.
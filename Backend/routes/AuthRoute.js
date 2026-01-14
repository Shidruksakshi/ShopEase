import express from 'express'
import { getUserData, login, Register, UserDatas } from '../controller/AuthController.js';
import { authMiddleware } from '../middleware/AuthMiddleware.js';

const router = express.Router();


router.post("/register",Register)
router.post("/login", login)


router.get("/user/me", authMiddleware, getUserData);


export default router

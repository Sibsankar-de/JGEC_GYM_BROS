import express from 'express';
import authController from '../controller/authController.js';

const authRouter = express.Router();

authRouter.post('/login',authController);
export default authRouter;
import express from 'express';
import workoutController from '../controller/workoutController.js';
const workRouter = express.Router();

workRouter.post('/workout',workoutController);
export default workRouter;

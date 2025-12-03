import express from 'express';
import getWorkouts from '../controller/getWorkouts.js';

const getWorkoutRouter = express.Router();

getWorkoutRouter.post('/getworkout',getWorkouts);

export default getWorkoutRouter;
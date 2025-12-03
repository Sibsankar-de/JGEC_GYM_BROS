import { User } from "../models/model.js";

const getWorkouts = async (req,res)=>{
    const { userId } = req.body;
    if(!userId) {
        return res.status(400).json({ success: false, message: "User ID is required" });
    }
    const user = await User.findOne({ userId });
    if(!user) {
        return res.status(404).json({ success: false, message: "User not found" });
    }
    const workouts = user.workouts;
    // console.log(workouts);
    if(!workouts) {
        return res.status(404).json({ success: false, message: "Workouts not found" });
    }
    return res.status(200).json({ success: true, user:user });
}

export default getWorkouts;
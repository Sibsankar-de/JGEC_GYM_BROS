import { User } from "../models/model.js";

const authController = async (req, res) => {
    const { userId, name, email } = req.body;
    if(!userId || !name || !email) {
        return res.status(400).json({ success: false, message: "All fields are required" });
    }
    const user = await User.findOne({ userId });
    if(user) {
        return res.status(200).json({ success: true, message: "User logged in successfully", user });
    }
    const newUser = new User({
        userId,
        name,
        email
    });
    await newUser.save();
    return res.status(200).json({ success: true, message: "User logged in successfully",user: newUser });
}

export default authController;
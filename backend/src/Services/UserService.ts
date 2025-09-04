import User from "../models/User.js";
import bcrypt from "bcrypt";

export const checkEmailExists = async (email : string) => {
    return await User.findOne({email});
};
import { emit } from "process";
import User from "../models/User.js";
import bcrypt from "bcrypt";

export const checkEmailExists = async (email : string) => {
    const user = await User.findOne({email});
    return user !== null;
};

export const createUser = async(email : string, username : string, password: string) => {
    const hashedpassword = await bcrypt.hash(password, 10);
    const newUser = new User({
        email,
        username,
        passwordHash: hashedpassword,
    });
    return await newUser.save();
}

export const validateUser = async (email: string, password : string) => {
    const user = await User.findOne({email});
    if(!user) return null;

    const isValid = await bcrypt.compare(password, user.passwordHash);
    if(!isValid) return null;

    return user;
}
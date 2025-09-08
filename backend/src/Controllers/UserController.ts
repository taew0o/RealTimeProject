import { Request, Response } from "express";
import * as UserService from "../Services/UserService.js"

//이메일 중복 체크
export const checkEmail = async (req : Request, res : Response) => {
    const { email } = req.body;
    if(!email){
        return res.status(400).json({ message: "이메일을 입력해주세요."});
    }
    const isEmailTaken = await UserService.checkEmailExists(email);
    return res.status(200).json({isExistEmail: isEmailTaken});
}

//회원가입
export const register = async (req : Request, res : Response) => {
    const { email, username, password } = req.body;
    if(!email || !username || !password){
        return res.status(400).json({ message : "모든 정보를 입력해주세요."})
    } 

    const user = UserService.createUser(email, username, password);
    const { passwordHash, ...userData } = (await user).toObject();
    return res.status(201).json({user: userData});
}

//로그인
export const login = async (req : Request, res : Response) => {
    const { email, password } = req.body;
    if(!email || !password){
        return res.status(400).json({ message : "이메일과 비밀번호를 입력해주세요." });
    }

    const user = await UserService.validateUser(email, password);
    if(!user){
        return res.status(401).json({message : "로그인에 실패하였습니다."});
    }

    return res.status(200).json({user});
}
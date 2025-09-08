import express from "express"
import * as UserController from "../Controllers/UserController.js"

const router = express.Router();

//이메일 중복 검사
router.post('/check-email', UserController.checkEmail);

//회원 가입
router.post('/', UserController.register);

export default router;
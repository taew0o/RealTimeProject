import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import { checkEmailExists, createUser, validateUser } from "../Services/UserService.js";

const runTest = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    console.log("✅ DB connected");

    // 1. 이메일 존재 여부 확인
    const exists = await checkEmailExists("test@example.com");
    console.log("Email exists?", exists);

    // 2. 유저 생성
    if (!exists) {
      const newUser = await createUser("test@example.com", "testuser", "password123");
      console.log("New User Created:", newUser);
    }

    // 3. 유저 로그인 검증
    const validatedUser = await validateUser("test@example.com", "password123");
    console.log("Validated User:", validatedUser);
  } catch (err) {
    console.error(err);
  } finally {
    await mongoose.disconnect();
  }
};

runTest();
import express from "express";
import { prisma } from "../utils/prisma/index.js";
import authorization from "../middlewares/authorization.js";

const router = express.Router();

router.post("/auth/signup", (res, req, next) => {
  // 회원가입 비지니스 로직
});

router.post("/auth/login", (res, req, next) => {
  // 로그인 비지니스 로직
});

router.post("/auth/signup", authorization, (res, req, next) => {
  // 로그아웃 비지니스 로직
});

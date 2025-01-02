import express from "express";
import { prisma } from "../utils/prisma/index.js";
import authorization from "../middlewares/authorization.js";

const router = express.Router();

router.post("/users/:userId", authorization, (res, req, next) => {
  // 프로필조회 비지니스 로직
});

router.patch("/users/:userId", authorization, (res, req, next) => {
  // 프로필수정 비지니스 로직
});

router.post("/users/:userId", authorization, (res, req, next) => {
  // 회원탈퇴 비지니스 로직
});

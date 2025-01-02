import express from "express";
import { prisma } from "../utils/prisma/index.js";
import authorization from "../middlewares/authorization.js";

const router = express.Router();

router.post("users/:userId/profile-image", authorization, (res, req, next) => {
  // 프로필 사진 업로드 비지니스 로직
});

router.post("/posts/:postId/profile-image", authorization, (res, req, next) => {
  // 게시물 이미지 업로드 비지니스 로직
});

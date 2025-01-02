import express from "express";
import { prisma } from "../utils/prisma/index.js";
import authorization from "../middlewares/authorization.js";

const router = express.Router();

router.post("/posts/:postId/likes", authorization, (res, req, next) => {
  // 게시물 좋아요 비지니스 로직
});

router.delete("/posts/:postId/likes", authorization, (res, req, next) => {
  // 게시물 좋아요 취소 비지니스 로직
});

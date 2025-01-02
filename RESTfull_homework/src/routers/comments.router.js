import express from "express";
import { prisma } from "../utils/prisma/index.js";
import authorization from "../middlewares/authorization.js";

const router = express.Router();

router.post("/posts/:postId/comments", authorization, (res, req, next) => {
  // 댓글 작성 비지니스 로직
});

router.get("/posts/:postId/comments", (res, req, next) => {
  // 댓글 조회 비지니스 로직
});

router.patch(
  "/posts/:postId/comments/:commentId",
  authorization,
  (res, req, next) => {
    // 댓글 수정 비지니스 로직
  }
);

router.delete("/posts/:postId/commentId", authorization, (res, req, next) => {
  // 댓글 삭제 비지니스 로직
});

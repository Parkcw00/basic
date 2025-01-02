import express from "express";
import { prisma } from "../utils/prisma/index.js";
import authorization from "../middlewares/authorization.js";

const router = express.Router();

router.post("/posts", authorization, (res, req, next) => {
  // 게시물 작성 비지니스 로직
});

router.get("/posts", (res, req, next) => {
  // 게시물 목록 조회 비지니스 로직
});

router.get("/posts/:postId", (res, req, next) => {
  // 게시물 상세 조회 비지니스 로직
});

router.patch("/posts/:postId", authorization, (res, req, next) => {
  // 게시물 수정 비지니스 로직
});

router.delete("/posts/:postId", authorization, (res, req, next) => {
  // 게시물 삭제 비지니스 로직
});

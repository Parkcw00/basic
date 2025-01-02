import express from "express";
import { prisma } from "../utils/prisma/index.js";
import authorization from "../middlewares/authorization.js";

const router = express.Router();

router.post("/users/:userId/follow", authorization, (res, req, next) => {
  // 사용자 팔로우 비지니스 로직
});

router.delete("/users/:userId/follow", authorization, (res, req, next) => {
  // 사용자 언팔로우 비지니스 로직
});

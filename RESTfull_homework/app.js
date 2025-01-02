import express from "express";
import routers from "./routers.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/api", routers);

app.listen(PORT, () => {
  console.log("서버가 3000번 포트에서 실행 중입니다.");
});

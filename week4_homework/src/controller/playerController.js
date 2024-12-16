// 간단한 인메모리 데이터베이스
import { prisma } from "../utils/prisma/index.js";

// 선수 조회
export async function getPlayers(req, res) {
  const players = await prisma.player.findMany({
    select: {
      idx: true,
      name: true,
      speed: true,
      shooting: true,
      grade: true,
    },
  });

  return res.status(200).json({ data: players });
}

// 선수 추가
export async function createPlayer(req, res) {
  const { name, speed, shooting, grade } = req.body;
  const newPlayer = await prisma.player.create({
    data: {
      name: name, // 데이터 키와 값을 명시적으로 매칭
      speed: speed,
      shooting: shooting,
      grade: grade,
    },
  });
  res.status(201).json(newPlayer);
}

// 선수 수정 (Prisma 사용)
export async function updatePlayer(req, res) {
  const playerId = parseInt(req.params.id);
  const { name, speed, shooting, grade } = req.body;

  const player = await prisma.player.findFirst({
    where: {
      idx: playerId,
    },
  });

  if (!player) {
    return res.status(404).json({ error: "선수를 찾을 수 없습니다." });
  }

  const updatedPlayer = await prisma.player.update({
    where: { idx: playerId },
    data: {
      name,
      speed,
      shooting,
      grade,
    },
  });

  res.status(200).json(updatedPlayer);
}

// 선수 삭제
export async function deletePlayer(req, res) {
  const playerId = parseInt(req.params.id);

  const player = await prisma.player.findUnique({
    where: { idx: playerId },
  });

  if (!player) {
    return res.status(404).json({ error: "선수를 찾을 수 없습니다." });
  }

  await prisma.player.delete({
    where: { idx: playerId },
  });

  res.status(204).send();
}

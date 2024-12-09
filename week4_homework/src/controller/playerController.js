// 간단한 인메모리 데이터베이스
const players = [
  { id: 1, name: "차범근", speed: 100, shouting: 100, grade: "S" },
  { id: 2, name: "메시", speed: 100, shouting: 100, grade: "S" },
  { id: 3, name: "호날두", speed: 100, shouting: 100, grade: "S" },
];

// 선수 조회
export function getPlayers(req, res) {
  res.json(players);
}

// 선수 추가
export function createPlayer(req, res) {
  const { name, speed, shouting, grade } = req.body;
  const newPlayer = {
    id: players.length + 1,
    name: name,
    speed: speed,
    shouting: shouting,
    grade: grade,
  };
  players.push(newPlayer);
  res.status(201).json(newPlayer);
}

// 선수 수정
export function updatePlayer(req, res) {
  const player = players.find(
    (player) => player.id === parseInt(req.params.id)
  );
  if (!player) {
    return res.status(404).json({ error: "선수를 찾을 수 없습니다. " });
  }

  const { name, speed, shouting, grade } = req.body;
  if (name) {
    player.name = name;
  }
  if (speed) {
    player.speed = speed;
  }
  if (shouting) {
    player.shouting = shouting;
  }
  if (grade) {
    player.grade = grade;
  }

  res.json(player);
}

// 선수 삭제
export function deletePlayer(req, res) {
  const index = players.findIndex(
    (player) => player.id === parseInt(req.params.id)
  );
  //findIndex는 조건에 맞는 값이 존재하지 않으면 -1을 반환하기 때문에!!!
  if (index === -1) {
    return res.status(404).json({ error: "선수를 찾을 수 없습니다." });
  }

  players.splice(index, 1);
  res.status(204).send();
}

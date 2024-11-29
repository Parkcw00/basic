const findTreasure = new Promise((resolve, reject) => {
  setTimeout(() => {
    const randomOpen = Math.random();

    if (randomOpen > 0.9) {
      resolve("보물 상자를 열었습니다!!");
    } else {
      reject("보물 상자를 열지 못했습니다 ㅠㅠ");
    }
  }, 3000);
});

findTreasure
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });

async function openTreasure() {
  try {
    const message = await findTreasure;
    console.log(message);
  } catch (error) {
    console.log(error);
  }
}

openTreasure();

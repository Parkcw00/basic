class GameCharacter {
  constructor(name, level, health, atk) {
    this.name = name; // 캐릭터 이름
    this.level = level; // 캐릭터 레벨
    this.health = health; // 기본 체력
    this.atk = atk;
  }

  attack() {
    console.log(`${this.name}가 공격을 시도합니다!`);
  }

  heal(healAmount) {
    this.health += healAmount;
    console.log(`${this.name}의 체력이${healAmount}만큼 회복되었습니다! `);
  }

  levelUp() {
    const randomAtk = Math.floor(Math.random()) * this.atk;
    const randomHealth = Math.floor(Math.random()) * this.health;

    this.atk += randomAtk;
    this.health += randomHealth;
  }
}

const warrior = new GameCharacter("타락파워전사", 1, 1000, 100);
const archer = new GameCharacter("타락파워궁수", 1, 500, 150);
const assassin = new GameCharacter("타락파워도적", 1, 400, 180);

console.log(warrior, archer, assassin);

warrior.attack();
archer.attack();
assassin.attack();

warrior.heal(100);
archer.heal(200);
assassin.heal(300);

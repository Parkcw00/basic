// [반복문 연습 문제]

// 문제 1: 1부터 10까지의 숫자를 출력하세요.
let num = function () {
    for (let i = 1; i < 11; i++) {
        console.log(i)
    }
}
num();

// 문제 2: 1부터 10까지의 합을 계산하여 출력하세요.
let num1 = function () {
    let answer = 0;
    for (let i = 1; i < 11; i++) {
        answer += i
    }
    console.log(answer)
}
num1();
// 문제 3: 구구단 3단을 출력하세요.
let num2 = function () {

    for (let i = 1; i < 10; i++) {
        console.log(`3x${i}: ${3 * i}입니다!`)
    }
}
num2();
// 문제 4: 배열에 저장된 과일들을 하나씩 출력하세요.
var fruits = ['사과', '바나나', '포도'];
let fruitsOut = function () {
    for (let i = 0; i < fruits.length; i++) {
        console.log(fruits[i])
    }
}
fruitsOut();

// 문제 5: while문을 사용하여 5부터 1까지 역순으로 출력하세요.
const num3 = function () {
    let a = 5

    while (a <= 5 && a !== 0) {
        console.log(a)
        a--;
    }
}
num3();
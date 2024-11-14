// [함수 연습 문제]

// 문제 1: 두 숫자를 더하는 함수를 작성하고 결과를 출력하세요.
function sum(a, b) {
    return a + b
}
console.log(sum(100, 120))
// 문제 2: 이름을 매개변수로 받아서 "안녕하세요, [이름]님!"을 출력하는 함수를 작성하세요.
function callname(name) {
    return console.log(`"안녕하세요, ${name}님!"`)
}
callname("박찬우");

// 문제 3: 세 개의 숫자 중 가장 큰 수를 반환하는 함수를 작성하세요.
function bignum(a, b, c) {
    if (a > b) {
        return console.log(a)
    } else if (b > c) {
        return console.log(b)
    } else {
        return console.log(c)
    }
}

bignum(150, 300, 40);
// 문제 4: 숫자를 매개변수로 받아 짝수인지 홀수인지 반환하는 함수를 작성하세요.
function EvenOdd(a) {
    if (a % 2 === 0) {
        return console.log(a, "는 짝수입니다!")
    } else {
        return console.log(a, "는 홀수입니다!")
    }
}

EvenOdd(10);
EvenOdd(9);

// 문제 5: 배열을 매개변수로 받아 모든 요소를 출력하는 함수를 작성하세요.
function arr1(arr) {
    for (i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}
arr1(['사과', '바나나', '수박', '귤', '복숭아', '감'])

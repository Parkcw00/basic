// [데이터 타입 연습 문제]

// 문제 1: 자신의 이름과 나이를 변수에 저장하고 출력하세요.
let name = '박찬우'
let age = 25
console.log(name)
console.log(age)
// 문제 2: 불리언 값을 저장하는 변수를 만들고 출력하세요.
const boolean = true;
console.log(boolean)

// 문제 3: null과 undefined의 차이를 콘솔로 확인하세요.
var undefinedVar;
var nullVar = null;

console.log(typeof undefinedVar)
console.log(typeof nullVar)
// 힌트:
// var undefinedVar;
// var nullVar = null;
// 두 변수를 console.log로 출력하고, typeof 연산자를 사용하여 타입을 확인해보세요.

// 문제 4: 좋아하는 음식 3가지를 배열에 저장하고 첫 번째 음식을 출력하세요.
const fruits = ['수박', '사과', '복숭아']
console.log(fruits[0])

// 문제 5: 사람의 정보를 객체로 만들어 이름과 나이를 저장하고 출력하세요.
const pcw = {
    name: '박찬우',
    age: 25,
    gender: 'male'
}
console.log(pcw)

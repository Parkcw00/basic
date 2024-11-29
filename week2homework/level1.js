const objArray = [
  { name: "apple", price: 100 },
  { name: "banana", price: 200 },
  { name: "grape", price: 300 },
];
// forEach를 이용하여 objArray의 name을 모두 출력
objArray.forEach(function (value) {
  console.log(value.name);
});

//-----------------------------------------------------------------//

// myIndexOf를 구현하여 arr.indexOf와 동일한 값이 나오도록 하기.
const arr = [1, 2, 3, 4, 5];
function myIndexOf(arr, value) {
  // myIndexOf 구현
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
}

const index1 = arr.indexOf(3); // 2
const index2 = myIndexOf(arr, 3); // 2
console.log(index1 === index2); // true
console.log(index1);
console.log(index2);

//--------------------------------------------------------------------//

// myIncludes를 구현하여 arr.myIncludes와 동일한 값이 나오도록 하기.
const arr1 = [1, 2, 3, 4, 5];
function myIncludes(arr1, value) {
  // myIncludes 구현
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === value) {
      return true;
    }
  }
  return false;
}

const includes1 = arr1.includes(3); // true
const includes2 = myIncludes(arr1, 3); // true
console.log(index1 === index2); // true
console.log(includes1);
console.log(includes2);

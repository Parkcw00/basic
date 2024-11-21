// // const objArray = [
// //   { name: "apple", price: 100 },
// //   { name: "banana", price: 200 },
// //   { name: "grape", price: 300 },
// // ];

// // // myFilter 를 구현하여 arr.filter 와 동일한 값이 나오도록 하기.
// function myFilter(arr, callback) {
//   // myFilter 구현
//   let filters = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (callback(arr[i])) {
//       filters.push(arr[i]);
//     }
//   }
//   return filters;
// }

// const result1 = myFilter(objArray, function (obj) {
//   return obj.price >= 200;
// });

// console.log(result1);

// // //--------------------------------------------------------------------------------------//

// const objArray = [
//   { name: "apple", price: 100 },
//   { name: "banana", price: 200 },
//   { name: "grape", price: 300 },
// ];

// // myMap를 구현하여 arr.map과 동일한 값이 나오도록 하기.
// function myMap(arr, callback) {
//   // myMap 구현
//   let mapArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (callback(arr[i])) {
//       mapArr.push(arr[i].price);
//     }
//   }
//   return mapArr;
// }

// const result1 = myMap(objArray, function (value) {
//   return value.price;
// });
// console.log(result1);

// // //--------------------------------------------------------------------------------------//

// const arr = [1, 2, 3, 4, 5];

// const result1 = arr.reduce(function (prev, current) {
//   return prev + current * 2;
// }, 0);

// console.log(result1);
// // reduce를 이용하여 arr의 모든 값에 곱하기 2를 한 값의 총합을 구하기.

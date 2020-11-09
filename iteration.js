
//------------------------KEY IN ARR LOOP--------------------
// let arr = [3,15,12,34,56];
// for (let key in arr){
//     console.log(arr[key]);
// }

//------------------------VAL OF ARR LOOP--------------------
// let arr = [3,15,12,34,56];
// for (let val of arr){
//     console.log(val);
// }

//------------------------FOREACH----------------------------
// let arr = [3, 15, 25, 6, 8, 12],
//     total = 0;
//
// /*for (let val of arr) {
//     total += val;
// };*/
//
// /*arr.forEach(function(val) {
//     total += val;
// });
//
// console.log(total);*/
//
// arr.forEach(function(val, idx, theArray) {
//     theArray[idx] = val * val;
// });
//
// let objArr = [{
//     firstName: "Steven",
//     lastName: "Hancock",
//     score: 90,
//     pass: null
// },{
//     firstName: "Lynette",
//     lastName: "Jorgensen",
//     score: 100,
//     pass: null
// },{
//     firstName: "Andrew",
//     lastName: "Wilson",
//     score: 69,
//     pass: null
// },{
//     firstName: "Annika",
//     lastName: "Turner",
//     score: 82,
//     pass: null
// }];
//
// objArr.forEach(function(val) {
//     (val.score < 70) ? val.pass = false : val.pass = true;
// });

//------------------------MAP--------------------------------
//
// let arr = [3, 15, 25, 6, 8, 12];
//
// let newArray = arr.map(function(val, idx, theArray) {
//     return val * val;
// });
// console.log(newArray);
//
// const array = [1, 2, 3, 4]
// const mapArray = array.map(element => element * 2)
// // array = [1, 2, 3, 4]
// // mapArray = [2, 4, 6, 8]

//------------------------FILTER-----------------------------
// let scores = [80, 50, 0, 100, 90, 80, 75];
//
// let passScores = scores.filter(function(val) {
//     return val >= 70;
// });
//
// let failScores = scores.filter(function(val) {
//     return val < 70;
// });
//
// const array = [1, 2, 3, 4]
// const filteredArray = array.filter(element => element%2)
// // array = [1, 2, 3, 4]
// // filteredArray = [1, 3]

//------------------------REDUCE-----------------------------
//The reduce() method executes a reducer function (that you
// provide) on each element of the array, resulting in single
// output value.
//[0, 1, 2, 3, 4].reduce((accumulator, currentValue, currentIndex, array) => accumulator + currentValue)
//
//array
// let scores = [50, 50, 0, 100, 90, 80, 75];
// let sum = scores.reduce(function (acc, val) {
//     return acc + val;
// }, 0)
// console.log(sum);//445
//
//object
// let objs = [{firstName: "Olga"}, {lastName: "Rublova"}, {scores: 85}];
// objs = objs.reduce(function (acc, val) {
//     return Object.assign(acc, val);
// }, {});
// console.log(objs);

//------------------------EVERY------------------------------
// let scores = [80, 50, 10, 100, 90, 80, 75];
//
// let results = scores.every(function(val) {
//     return val > 0;
// });

//------------------------SOME-------------------------------
// let scores = [80, 50, 10, 100, 90, 80, 75];
//
// let results = scores.some(function(val) {
//     return val === 0;
// });
//
// const a = [1, 2, 3, 5, 8].some(item => item > 5)//TRUE
// const b = [1, 2, 3, 4, 5].some(item => item > 5)//FALSE

//------------------------TO STRING---------------------------
// let scores = [80, 50, 10, 100, 90, 80, 75];
//scores.toString();




//------------------------EXERCISE----------------------------
//Use one of the Array methods to count the number of 0s in this list of scores.
// let scores = [80, 50, 0, 100, 90, 80, 75, 0, 0, 5, 65, 93];
// let zero = 0;
// let zeroCounts = scores.forEach(function (item){
//  if (item == 0) {zero++}
// });
// console.log(zero);
//
//or
// let zeroCnt = scores.reduce(function(acc, val) {
//     return (val === 0) ? acc + 1 : acc;
// }, 0);
//-----------------------------------------------------------
//Convert this string to an array. Then create a new array that doesn't include
// any of the articles (a, an, the).
//
// let stmt = "The best part of a sunset is the muted color that appears in anticipation of the deep reds, oranges and golds that will hopefully come later.";
//
// let noArticles = stmt.split(" ").filter(function(val) {
//     return !/\ba\b|\ban\b|\bthe\b/i.test(val);
// });
//
// let noArticles = stmt.split(" ").filter(val => !/\ba\b|\ban\b|\bthe\b/i.test(val));
//-----------------------------------------------------------


//------------------------ARROW FUNCTIONS--------------------
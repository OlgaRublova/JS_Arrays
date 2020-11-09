//---------------------REVERSE ORDER---------------------
// let arr = ["Steven", "Mary", "Simone", "Ari", "McKay", "James"];
// arr.reverse();

//---------------------SORT------------------------------
// let arr = ["Steven", "Mary", "Simone", "ari", "McKay", "James"];
//
// let arr2 = [15, -10, 500, 43, -25, 0, 323, 112];
//
// let compareNum = function(a, b) {
//     /*if (a < b) {
//         return -1;
//     } else if (b < a) {
//         return 1;
//     } else {
//         return 0;
//     }*/
//     //return (a < b) ? 1 : (b < a) ? -1 : 0;
//     return a - b;
// };
//
// let compareString = function(a, b) {
//     let x = a.toLowerCase(),
//         y = b.toLowerCase();
//
//     if (x < y) return -1;
//     if (y < x) return 1;
//     return 0;
// };
//
// arr.sort(function(a, b) {
//     let x = a.toLowerCase(),
//         y = b.toLowerCase();
//
//     if (x < y) return -1;
//     if (y < x) return 1;
//     return 0;
// });
//
// arr2.sort(compareNum);

//---------------------SORT ARRAY OF OBJECTS-------------
//
// let arr = [{
//     firstName: "Steven",
//     lastName: "Hancock",
//     score: 90
// },{
//     firstName: "Lynette",
//     lastName: "Jorgensen",
//     score: 100
// },{
//     firstName: "Andrew",
//     lastName: "Wilson",
//     score: 71
// },{
//     firstName: "Annika",
//     lastName: "Turner",
//     score: 82
// }];
//
// /*arr.sort(function(a, b) {
//     if (a.firstName < b.firstName) return -1;
//     if (b.firstName < a.firstName) return 1;
//     return 0;
// });*/
//
// arr.sort(function(a, b) {
//     return a.score - b.score;
// });

//---------------------SPLICE----------------------------
//
// let arr = [1, 2, 3, 4, 5, 6];
//
// //let returnArray1 = arr.splice(2, 2); // 2 2nd is not included
//
// //let returnArray2 = arr.splice(4);
//
// //let returnArray3 = arr.splice(2, 0, "a", "b");
//
// let returnArray4 = arr.splice(2, 1, "a", "b");

//---------------------COPY------------------------------
// let arr = [1, 2, 3, 4, 5, 6];
//
//
// //arr.copyWithin(2, 0, 2);
//
// //arr.copyWithin(1, 2, 3);
//
// //arr.copyWithin(2, 0);
//
// arr.copyWithin(3, -1);
//
// arr.copyWithin(0, 5, 6);

//---------------------CLONE-----------------------------
//
// let arr = ["Steven", "Mary", "Simone", "Ari", "McKay", "James"];
//
// let arrSort = [...arr];
// arrSort.sort();
//
// let arrReverse = Array.from(arr);
// arrReverse.reverse();

//---------------------CHAIN-----------------------------
//
// let arr = ["Steven", "Mary", "Simone", "Ari", "McKay", "James"];
//
// let arrSort = [...arr].sort().toString();
//
// let arrReverse = Array.from(arr).reverse().toString();

//---------------------PUSH------------------------------
//The push() method adds one or more elements to the end of an array
// const array = [1, 2, 3, 4]
// array.push(10) // 5 (push returns the length of the new array)
// // array = [1, 2, 3, 4, 10]

//---------------------POP-------------------------------
//The pop() method removes the last element from an array and returns that element.
// const array = [1, 2, 3 , 4]
// array.pop() // 4 (pop returns the element removed)
// // array = [1, 2, 3]

//---------------------SHIFT-----------------------------
//The shift() method removes the first element from an array and returns that removed element.
// const array = [1, 2, 3, 4]
// array.shift() // 1(shift returns the removed element)
// // array = [2, 3, 4]

//---------------------UNSHIFT---------------------------
//The unshift() method adds one or more elements to the beginning of an array
// and returns the new length of the array.
// const array = [1, 2, 3, 4]
// array.unshift(9, 10) // 6 (unshift returns the length of new array)
// // array = [9, 10, 1, 2, 3, 4]

//---------------------SPLIT---------------------------
// let str = 'JavaScript String split()';
// let substrings = str.split(' ');     //["JavaScript", "String", "split()"]
//let substrings = str.split(' ',2);    //["JavaScript", "String"]
//let paragraph = 'Good Morning! How are you? This is John. John is my friend.';
//let sentences = paragraph.split(/[!,?,.]/);//["Good Morning", " How are you", " This is John", " John is my friend", ""]

//---------------------JOIN----------------------------
//
// let stmt = "The best part of a sunset is the muted color that appears in anticipation of the deep reds, oranges and golds that will hopefully come later.";
//
// let words = stmt.split(" ");
// console.log(words.join(" "));
//
// let arr = [1, 3, 4, 6, 2, 8];
// let str = arr.join();

//---------------------COMBINING ARRAYS-----------------
// let array1 = [5, 10, 15, 20, 25],
//     array2 = [2, 4, 6, 8, 10, 12],
//     array3 = ["abc", "def", "ghi", "jkl"];
//
// let newArray = [...array1, ...array2, ...array3, 1, 3, 5, 7];
//let newArray = array2.concat(array1, array3, [1, 3, 5, 7]);

//---------------------EXTRACTING SUBARRAY--------------
//---------------------SLICE----------------------------
//
// let array1 = [5, 10, 15, 20, 25, 30, 35, 40];
//
// let newArray = array1.slice(0,5);
//
// let newArray2 = array1.slice(2);
//
// let newArray3 = array1.slice();
//
// let test = function() {
//     let argArray = Array.prototype.slice.call(arguments);//converts into an array
//     console.log(Array.isArray(argArray));//checks if it is really an array now
// };
//
// test(1,2,3);

//---------------------FLATTENING ARRAY------------------
// let array1 = [[5, 10], [15, 20], [25, 30, 35, 40]];
// let newArray = array1.flat();
//
// let strArray = ["The best part of a sunset", "is the muted color that appears", "in anticipation", "of", "the deep reds, oranges and golds that will hopefully come later."];
// let strArraySplit = strArray.flatMap(val => val.split(" "));
//
// var arr = [1, 2, 3, 4];
//
// arr.flatMap(x => [x, x * 2]);
// // is equivalent to
// arr.reduce((acc, x) => acc.concat([x, x * 2]), []);
// // [1, 2, 2, 4, 3, 6, 4, 8]
//
// let arr1 = [1, 2, 3, 4];
//
// arr1.map(x => [x * 2]); //[[2], [4], [6], [8]]
//
// arr1.flatMap(x => [x * 2]); // [2, 4, 6, 8]





//---------------------EXERCISE-------------------
//------------------------------------------------
// var newArr = [];
// newArr.push(1,2,3,4,5);
// console.log(newArr);
// console.log(newArr.length);
// newArr[3] = newArr[3]*10;
//
// const addItem = function (num){
//     newArr.push(num);
// }
// addItem(23);
//
// const getItem = function (num){
//     return newArr.shift();
// }
// getItem();
//
// console.log(newArr);
//------------------------------------------------
//------------------------------------------------

//Make a sorted version of the growthRate array.
// Make sure to clone it first, so that you can maintain the order of the original data.
// Sort so the lowest number comes first. Try using chaining with this exercise.
//
// let growthRate = [1.1, 0.5, -0.1, 0.3, 1.2, 1.5, 2.1, 0.8, 1.5, 0.3, -0.4];
// let growthRateNew = [...growthRate].sort((a, b) => a - b);
// console.log(growthRateNew);
//------------------------------------------------
//------------------------------------------------

//Make a clone of the months array, then sort it and extract all the months that start with
// 'J' into a subarray. Try using chaining with this exercise.
//
// let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// let monthsNew = [...months].sort((a, b) =>
//     (a.toLowerCase() < b.toLowerCase()) ? -1 : (a.toLowerCase() > b.toLowerCase()) ? 1 : 0).splice(4, 3);
// console.log(monthsNew);

//------------------------------------------------
//------------------------------------------------
//Below are two arrays of strings. Split each string so that individual words are
// elements in an array. Make sure to flatten each array, and then combine them
// into a single array with strArray1 coming first. Once that is done, convert
// the array to a string and display the resulting sentence.
//
//
// let strArray1 = ["Arrays are important", "data structures for any", "language"],
//     strArray2 = ["and", "should be mastered", "in", "JavaScript."];
//
// let str = [...strArray1.flatMap(val => val.split(" ")), ...strArray2.flatMap(val => val.split(" "))].join(' ');
// console.log(str);
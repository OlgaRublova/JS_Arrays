// let arr = [1, 2, 3];
//
// let obj = {
//     length: 4,
//     1: 'one',
//     2: 'two',
//     3: 'three'
// };
//
// /*for (let val of obj) {
//     console.log(val);
// };*/
//
// //iterable
//
// let map = new Map();
// map.set(1, 'one');
// map.set(2, 'two');
// map.set(3, 'three');
//
// /*for (let val of map) {
//     console.log(val);
// };*/
//
// let divs = document.querySelectorAll('div');
//
// for (let val of divs) {
//     console.log(val);
// }

//-------------CONVERT INTO AN ARRAY -----------
// let mapArray = [...map];
// let divsArray = [...divs];
// let mapArray2 = Array.from(map);
// let divsArray2 = Array.from(divs);
//
// let objArray = [...obj];//not iterable if length isn't added into object

//-------------CONVERT A STRING INTO AN ARRAY ---
// let str = "Natural language has no dominant paradigm, and neither " +
//     "does JavaScript. Developers can select from a grab bag of " +
//     "approaches--procedural, functional, and object oriented--" +
//     "and blend them as appropriate.";
//
// let strArray = [...str];
// let strArray2 = Array.from(str);

//-------------ACCESS CHARS IN A STRING ---
// let str = "Natural language has no dominant paradigm, and neither " +
//     "does JavaScript. Developers can select from a grab bag of " +
//     "approaches--procedural, functional, and object oriented--" +
//     "and blend them as appropriate.";
// let str2 = "";
//
// for (let val of str) {
//     if (val === 'j') {
//         str2 += val.toUpperCase();
//     } else {
//         str2 += val;
//     }
// }
//
// let str3 = "";
//
// for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[i].toLowerCase()) {
//         str3 += str[i].toUpperCase();
//     } else {
//         str3 += str[i];
//     }
// }

//-------------CREATE AN ARRAY FROM A STRING ---
// let str = "Natural language has no dominant paradigm, and neither " +
//     "does JavaScript. Developers can select from a grab bag of " +
//     "approaches--procedural, functional, and object oriented--" +
//     "and blend them as appropriate.";
// let wordArray = str.split(" ", 10);
// let commaArray = str.split(",");
// let hyphenArray = str.split("-");
// let regexArray = str.split(/[,.]|--/);

//--------------ARGUMENTS INTO AN ARRAY ---
// let sumIt = function(...nums) {
//     //let nums = [...arguments];
//     console.log(Array.isArray(nums));
//     console.log(nums);
// };
//
// sumIt(2,3,4,5,6,7);

//--------------OBJECT PROPERTY INTO AN ARRAY ---
// let obj = {
//     q1: 55,
//     q2: 85,
//     q3: 90,
//     q4: 0
// };
//
// /*Object.keys();
// Object.values();
// Object.entries();*/
//
// let objKeys = Object.keys(obj);
// let objValues = Object.values(obj);
// let objEntries = Object.entries(obj);

//---------------MAPS--------------------
// let i = {x: 10},
//     j = {y: 20},
//     obj2 = {};
//
// obj2[i] = 100;
// obj2[j] = 5;
//
//
// let map = new Map();
//
// map.set(i, 100);
// map.set(j, 5);

//---------------SETS--------------------
//
// let set = new Set();
//
// set.add(100);
// set.add(5);
// set.add(100);
//
// let arr =  [1, 2, 4, 6, 8, 6, 7, 10, 2];
//
// let set2 = new Set(arr);
//
// let uniqArray = [...set2];

//---------------EXERCISE----------------
//The processData function has several data structures being passed to it.
// Check to see if the data is an Array. If not convert it to an array and
// then return an array of those arrays. You can check and see the return
// value in the console.
//
// let methods = ["map", "filter", "reduce", "reduceRight", "forEach", "every", "some"],
//     divs = document.querySelectorAll('div'),
//     nums = new Set([1, 2, 3, 4, 5]),
//     all = new Map();
//
// let processData = function(...coll) {
//     let newArray = [];
//     for (let val of coll) {
//         if (Array.isArray(val)) {
//             newArray.push(val);
//         } else {
//             newArray.push(Array.from(val));
//         }
//     }
//     return newArray;
// };
// let allArray = processData(methods, divs, nums, all);
//
// console.log(allArray);
//------------------------------------------
//------------------------------------------
//Below you will find two arrays that contain student names.
// Combine these two arrays together into a new array and
// remove any duplicates.
// To make this problem a bit more difficult, there are case
// differences in some of the names. To eliminate that problem
// map to new arrays before combining and eliminating duplicates.
//
//
// let studentsA = ["James", "Annika", "Cameron", "AntoniO", "Kaylie", "Gabriel", "Emily", "sarah"];
// let studentsB = ["LJ", "Brianna", "David", "Antonio", "Kelsey", "Joshua", "Emily", "Sarah"];
//
// let allStudents = Array.from(new Set([...studentsA.map(val => val.toUpperCase()),...studentsB.map(val => val.toUpperCase())]));
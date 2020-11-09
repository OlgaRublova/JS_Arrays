//------------------INDEX OF-----------------------
//------------------LAST INDEX OF------------------
// let students = ["Steven", "Lynette", "Kaylie", "LJ", "Joshua", "Sarah", "Emily"],
//     scores = [80, 90, 55, 60, 85, 95, 25, 100];
//
// let numLoc = scores.lastIndexOf(5);
// let strLoc = students.indexOf("Steven");
//
// if (scores.indexOf(100) > -1) {
//     console.log("This array contains 100.")
// }

//------------------INCLUDES-----------------------
// let scores = [80, 90, 55, 60, 85, 95, 25, 100];
//
// if (scores.includes(100)) {
//     console.log("This array contains 100.")
// }

//-------------------FIND----------------------------
// let scores = ["80", 90, "55", 60, 100, 85, 95, 25, "100"];
//
// let topScore = scores.find(function(val) {
//     return val == 100;
// });
//
// let users = [{name: "Steve", q1: 45, q2: 85}, {name: "Ignacio", q1: 100, q2: 100}, {name: "Alvin", q1: 95, q2: 100}, {name: "Brianna", q1: 100, q2: 85}, {name: "Andrea", q1: 75, q2: 95}];
//
// let both = users.find(val => val.q1 == 100 && val.q2 == 100);

//-------------------EXERCISE-------------------------
//Create a function that can be used to check for and return a user object
// from the objs array. The function will accept an ID. It will then use
// the some method to first check and see if the ID exists in the array.
// If it exists, return the associated object. If it doesn't exist, return false.
//
//
// let objs = [{id: "LI_34", name: "Steven", q1: 85, q2: 0},{id: "WL_100", name: "Mary", q1: 95, q2: 100},{id: "LI_25", name: "Lynette", q1: 45, q2: 50},{id: "LI_290", name: "Emily", q1: 65, q2: 30},{id: "WL_97", name: "Sarah", q1: 35, q2: 80}];
//
// const getUser = function(id) {
//     id = id.toUpperCase();
//     if (objs.some(val => val.id.toUpperCase() == id)) {
//         return objs.find(elem => elem.id.toUpperCase() == id);
//     } else {
//         return false;
//     }
// };
//----------------------------------------------------
//----------------------------------------------------
//This array represents a series of pages in an online course.
// If the page has been viewed, it records a 1. It the page has
// not been viewed, it records a 0. Create a function that will
// check and see if there are any 0s in the array. If there is
// a 0, retrieve the index of the first 0 and return it; this is
// the page that will be shown to the user. If there are no zeros,
// return the index for the last element in the array (the last page).
//
//
// let stateInfo = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0];
//
// const getPagePosition = function() {
//     if (stateInfo.includes(0)) {
//         return stateInfo.indexOf(0);
//     } else {
//         return stateInfo.length - 1;
//     }
// };

//----------------------------------------------------
//----------------------------------------------------


//----------------------------------------------------
//----------------------------------------------------
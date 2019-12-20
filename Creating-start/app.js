/*Array literal*/
// let arr1 = [];
// let arr2 = [1, 2, 3, 4, true, "array", {one: 1}, [3, 5]];

/*Array Constructor - not preferred */
// let arr3 = new Array();
// let arr4 = new Array(10);//creates an array with 10 elements
// let arr5 = [, , , , , , , ,]
// let arr6 = new Array(1, 2, 3, 4, 5, true);

/*Array.of*/
// let arr44 = Array.of(10); //creates an array with only 1 element
// let arr = Array.of(5, 6, 7); //static method

/*Array.fill to create an array*/
//The fill() method fills (modifies) all the elements of an array from a start index (default zero)
// // to an end index (default array length) with a static value. It returns the modified array.
// const array1 = [1, 2, 3, 4];
// console.log(array1.fill(0, 2, 4));
// // expected output: [1, 2, 0, 0]
//
// let scores = Array(10).fill(0, 2,6);
// console.log(scores);

/*Sparse array*/
// arr7 = [,,,,,,,];
// arr7[5] = 3.14;
// console.log(arr7.length);

/*Deleting elements of an array*/
// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// delete arr1[3];
// delete arr1[5];
// console.log(arr1);

/* Using arrays as stacks(push and pop) */
//The push() method adds one or more elements to the end of an array
// let arr = [1,2,3,4,5];
// arr.push(55,44);
// console.log(arr);

//The pop() method removes the last element from an array and returns that element.
// let arr1 = arr.pop();
// console.log(arr1);

//The shift() method removes the first element from an array and returns that removed element.

//The unshift() method adds one or more elements to the beginning of an array
// and returns the new length of the array.

// var newArr = [];
// newArr.push(1,2,3,4,5);
// console.log(newArr);
// console.log(newArr.length);
// newArr[3] = newArr[3]*10;
// console.log(newArr);


// The splice() method adds and/or removes array elements.
// The splice() method overwrites the original array

// splice(start);
// splice(start, deleteCount);
// splice(start, deleteCount, item1);
// splice(start, deleteCount, item1, item2, itemN);

// ********************************

// remove elements

let age3 = [33, 55, 67, 18, 59, 30];
let removedItem = age3.splice(2, 3); //  remove elements start from index 2 and remove 3 element total

console.log(age3)
// [33, 55, 30]

console.log(removedItem);
// [67, 18, 59];

// *********************************

// add new element

let fruits = ["Banana", "Orange", "Apple", "Mango"];

// At position 2, add 2 elements:
fruits.splice(2, 0, "Lemon", "Kiwi");

console.log( fruits);
// ["Banana", "Orange", "Lemon", "Kiwi", "Apple", "Mango"];


// *********************************

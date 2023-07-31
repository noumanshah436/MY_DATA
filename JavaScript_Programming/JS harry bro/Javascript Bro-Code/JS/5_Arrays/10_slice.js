// https://www.w3schools.com/jsref/jsref_slice_array.asp

// The slice() method returns selected elements in an array, as a new array.
// The slice() method selects from a given start, up to a (not inclusive) given end.
// The slice() method does not change the original array.

// syntax:
// array.slice(start_index, end_index)

// Parameters
// start: *****
// optional
// Start position. Default is 0.
// Negative numbers select from the end of the array.

// end:  *****
// optional
// End position. Default is last element.
// Negative numbers select from the end of the array.

// *************************

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3); // (start_index, end_index)   //  end_index is exclusive
console.log(fruits);
console.log(citrus);

// output
// ["Banana", "Orange", "Lemon", "Apple", "Mango"]
// ["Orange", "Lemon"];

// *************************

const myBest = fruits.slice(-3, -1); // (start, end) // end_index is exclusive

console.log(fruits);
console.log(myBest);

// ["Banana", "Orange", "Lemon", "Apple", "Mango"]
// ["Lemon", "Apple"];

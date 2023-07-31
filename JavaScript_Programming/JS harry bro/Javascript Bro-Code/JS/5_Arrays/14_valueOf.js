// The valueOf() method returns the array itself.
// The valueOf() method does not change the original array.
// fruits.valueOf() returns the same as fruits.

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const myArray = fruits.valueOf(); // both pointing to same array

console.log(fruits);
console.log(myArray);

fruits.push("PineApple");

console.log(fruits);
console.log(myArray);

// ******* index.js *******
// https://www.w3schools.com/jsref/jsref_sort.asp

let numbers = [3, 14, 1, 2, 5];
console.log(numbers);

//numbers.sort(); //ASCII character order

//  sort in ascending order
numbers.sort(function (x, y) {
  return x - y;
});

// sort in descending order
// numbers.sort(function(x, y){
//   return y - x;
// });

//  sort in ascending order using arrow function
// numbers.sort((x, y) => x - y);

//  sort in desscending order using arrow function
// numbers.sort((x, y) => y - x);

console.log(numbers);

// **********************************

// compareFunction	Optional.

// A function that defines a sort order. The function should return a negative, zero, or positive value, depending on the arguments:
// function(a, b){return a-b}
// When sort() compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.

// Example:

// The sort function will sort 40 as a value lower than 100.

// When comparing 40 and 100, sort() calls the function(40,100).

// The function calculates 40-100, and returns -60 (a negative value).

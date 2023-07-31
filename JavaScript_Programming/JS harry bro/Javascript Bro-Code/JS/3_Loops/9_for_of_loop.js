// The for...of statement creates a loop iterating over iterable1 objects, including: built-in String, Array,
//  array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined iterable1s. It invokes a
//  custom iteration hook with statements to be executed for the value of each distinct property of the object.

// syntax:

// for (variable of iterable1) {
//     statement
//   }

// variable
// On each iteration a value of a different property is assigned to variable. variable may be declared with const, let, or var.
// iterable1
// Object whose iterable1 properties are iterated.


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of

//*************************
const iterable1 = [10, 20, 30];

for (const value of iterable1) {
  console.log(value);
}
// 10
// 20
// 30

//*************************

let user = {
  name: "John",
  age: 30,
};

// loop over keys-and-values
for (let [key, value] of Object.entries(user)) {
  console.log(`${key}:${value}`);
}

// name:John, then age:30

//*************************

// Iterating over a String
const iterable3 = 'boo';

for (const value of iterable1) {
  console.log(value);
}
// "b"
// "o"
// "o"

//*************************
// Iterating over a TypedArray
const iterable4 = new Uint8Array([0x00, 0xff]);

for (const value of iterable1) {
  console.log(value);
}
// 0
// 255

//*************************

// Iterating over a Map
const iterable5 = new Map([['a', 1], ['b', 2], ['c', 3]]);

for (const entry of iterable5) {
  console.log(entry);
}
// ['a', 1]
// ['b', 2]
// ['c', 3]

for (const [key, value] of iterable5) {
  console.log(value);
}
// 1
// 2
// 3

//*************************
// Iterating over a Set
const iterable6 = new Set([1, 1, 2, 2, 3, 3]);

for (const value of iterable1) {
  console.log(value);
}
// 1
// 2
// 3

//*************************

//*************************

//*************************

//*************************

//*************************

//*************************


//*************************


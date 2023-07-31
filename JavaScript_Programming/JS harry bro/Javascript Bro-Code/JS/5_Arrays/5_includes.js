// The includes() method returns true if an array contains a specified value.
// The includes() method returns false if the value is not found.
// The includes() method is case sensitive.

// syntax
// array.includes(element, start)

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let a = fruits.includes("Mango");
console.log(a);

// Start the search at position 3:
a = fruits.includes("Banana", 3);
console.log(a);

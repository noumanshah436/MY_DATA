// The shift() method removes the first element from an array and returns that removed element.
//  This method changes the length of the array.

const array1 = [1, 2, 3];

const firstElement = array1.shift();

console.log(array1);
// expected output: Array [2, 3]

console.log(firstElement);
// expected output: 1

// *******************************

// The shift() method is often used in condition inside while loop.
//  In the following example every iteration will remove the next element from an array, until it is empty:

const names = ["Andrew", "Tyrone", "Paul", "Maria", "Gayatri"];

while (typeof (i = names.shift()) !== "undefined") {
  console.log(i);
}
// Andrew, Tyrone, Paul, Maria, Gayatri

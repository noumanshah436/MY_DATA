// nullish coalescing
// The nullish coalescing (??) operator is a logical operator
// that returns its right-hand side operand when its left-hand side operand is null or undefined,
//  and otherwise returns its left-hand side operand.

let foo = null ?? "default string";
console.log(foo);
// expected output: "default string"

let baz = 0 ?? 42;
console.log(baz);
// expected output: 0

baz = undefined ?? 42;
console.log(baz);
// expected output: 0

var dev; // undefined
console.log(dev ?? "default string");
// expected output: "default string"

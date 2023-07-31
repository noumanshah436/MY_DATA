// let / const -----> block level scope.

// var   ----->    function level or global scope.
//                 i.e. if we define var inside a function, we can still use it
//                       ouside this function because it has global scope

if (1) {
  let i = 234;
  console.log(i);
}

console.log(i);

function ui(name) {
  let i = 9;
  console.log(i);
  return `This is a ${name} ui`;
}

console.log(ui("harry"), i);

// ***********************
// https://www.w3schools.com/JS/js_let.asp

// ES6 introduced two important new JavaScript keywords: let and const.

// let:
// Variables defined with let cannot be Redeclared.
// Variables defined with let must be Declared before use.
// Variables defined with let have Block Scope.
// Variables defined with let inside a { } block cannot be accessed from outside the block:

// const:
// declare them with capital letters
// variables must be assigned a value when they are declared
// Variables defined with const cannot be Redeclared.
// Variables defined with const cannot be Reassigned.
// Variables defined with const have Block Scope.

// var:
// Variables declared with the var keyword have function scope.
// Redeclaring a variable using the var keyword can impose problems
// Variables declared inside a { } block can be accessed from outside the block.

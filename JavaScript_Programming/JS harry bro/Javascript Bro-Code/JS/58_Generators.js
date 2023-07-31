console.log("this is tutorial 53");

// https://www.youtube.com/watch?v=RN5FRD-yrz4
// https://codeburst.io/understanding-generators-in-es6-javascript-with-examples-6728834016d5
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators#generator_functions

// why Generators in JavaScript?
//  array of 1 - 1Billion
//      -> instead of storing huge amount of data in array ,  we will create values/data on the fly using generator function

// Generator functions provide a powerful alternative of iterators:
// Generators allow you to define an iterative algorithm by writing a single function whose execution is not continuous.

// a generator is a function that can stop midway using yield keyword and then continue from where it stopped.

// Generators:
// In JavaScript, a generator is a function which returns an object on which you can call next() .
//  Every invocation of next() will return an object of shape — { value: Any, done: true|false. }

// The generator does not use a return statement. Instead, it uses a yield keyword.
// Yield functionality is very similar to return as it returns a value to the caller, but the difference is
// that it also saves the state of the iterator. Meaning that when we use the function again, the yield will
// resume it is the value from the place it left off.

// Yield:-
// The yield keyword pauses the generator function execution, and the value of the expression
// following the yield keyword is returned to the generator's caller. It acts as a generator-based
// version of the return keyword. In the following example, to pause the generator's execution,
// and we use the statement yield.:
// function* awesomeGenerator(){
//   yield 'Hello World' // We pause the execution here
//   console.log('We are back again') // When we resume, we are here
// }

// next() method:-
// A generator gives us the next() method, which is used to resume the execution.
// This method returns an object with two properties. These are value and done:
// {
//   value: [ next value ],
//   done: [ true if we reach the end, else false]
// }

function* numbersGenr() {
  let i = 0;

  yield 1; //  when we call next first time, 1 will be returned
  yield 2; //  when we call next 2nd time, 2 will be returned
  yield 3;
  yield 4;
}

const gene = numbersGenr();
console.log(gene.next().value); //  1
console.log(gene.next().value); //  2
console.log(gene.next().value); //  3
console.log(gene.next().value); //  4
console.log(gene.next().value); //  undefined

// ***************************

function* numbersGen() {
  let i = 0;

  while (true) {
    yield i++;
    // yield (i++).toString();
  }
}

const gen = numbersGen();
console.log(gen.next().value); //  execute whole function till yield
console.log(gen.next().value); //  resume execution and it will be in while loop

// ***************************

function* generatorFunction() {
  console.log("This will be executed first.");
  yield "Hello, ";
  console.log("I will be printed after the pause");
  yield "World!";
}
const generatorObject = generatorFunction(); //  function will not run yet
console.log(generatorObject.next().value); //  this will execute function and yield hello
console.log(generatorObject.next().value); //   this will yield 'World'
console.log(generatorObject.next().value); // undefined

// This will be executed first.
// Hello,
// I will be printed after the pause
// World!
// undefined

// ***************************

//   We can also return from a generator. However, return sets the done property to true
//   after which the generator cannot generate any more values.

function* generatorFunc() {
  yield "a";
  return "b"; // Generator ends here.
  yield "a"; // Will never be executed.
}

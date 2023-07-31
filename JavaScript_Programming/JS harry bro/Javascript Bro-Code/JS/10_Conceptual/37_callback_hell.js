// What is "callback hell"?
// Asynchronous JavaScript, or JavaScript that uses callbacks, is hard to get right intuitively.
//  A lot of code ends up looking like this pyramid and hard to maintain

// Callback Hell:
// Callback Hell is essentially nested callbacks stacked below one another forming a pyramid structure.
// Every callback depends/waits for the previous callback, thereby making a pyramid structure that affects the readability and
//  maintainability of the code.

// There are four solutions to callback hell:
// 1) Write comments
// 2) Split functions into smaller functions
// 3) Using Promises
// 4) Using Async/await

// *********************

// lets supose a problem

// 1: 2s fetch students
// 2: 2s student name and age
// 3: 2s gender

const getRollNo = () => {
  console.log("API getting roll number");

  // getting students
  setTimeout(() => {
    let students = [1, 2, 3, 4, 5, 6, 7, 8];
    console.log(students);

    // for student name and age
    setTimeout((roll_no) => {
      const bioData = {
        name: "Nouman",
        age: 24,
      };
      console.log(`My name is ${bioData.name} and age is ${bioData.age}`);

      // for student gender
      setTimeout(
        (name) => {
          bioData.gender = "Male";
          console.log(
            `My name is ${bioData.name} and age is ${bioData.age} and i am ${bioData.gender}`
          );
        },
        2000,
        bioData.name
      );

    }, 2000,students[1]);

  }, 2000);
};

getRollNo();

// *********************
// const mainFunction = (callback) => {
//   setTimeout(() => {
//     callback([2, 3, 4]);
//   }, 2000);
// };

// const add = (array) => {
//   let sum = 0;
//   for (let i of array) {
//     sum += i;
//   }
//   console.log(sum);
// };

// mainFunction(add);

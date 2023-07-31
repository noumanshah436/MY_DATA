// https://codewithharry.com/videos/javascript-tutorials-in-hindi-39

// Promise: Best video on promises
// -resolve
// -reject
// -pending
/*
//

Promise  = the Promise object represents the eventual completion (or failure) of an asynchronous operation
            and its resulting value.”

            I promise to do this whenever that is true. If it isn't true, then I won't.

A promise has three states:  ****************

pending: It is the initial state.
Fulfilled: It indicates that the promised operation was successful.
Rejected: It indicates that the promised operation was unsuccessful.


Benefits of Promises:-   ****************
It improves the code readability
It is better in the handling of asynchronous operations
It has a better flow of control definition in asynchronous logic
It is better in error handling
*/

function func1() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      const error = true;
      if (!error) {
        console.log("Function: Your promise has been resolved");
        resolve();
      } else {
        console.log("Function: Your promise has not been resolved");
        reject("Sorry not fulfilled");
      }
    }, 2000);
  });
}

console.log("before");

func1()
  .then(function () {
    console.log("Harry: Thanks for resolving");
  })
  .catch(function (error) {
    console.log("Harry: Very bad bro. Reason: " + error);
  });

console.log("After");

// function inside then is run as - resolve()
// function inside catch is run as - reject()

// node 39_a_Promises.js

// Output:

// before
// After
// Function: Your promise has not been resolved
// Harry: Very bad bro. Reason: Sorry not fulfilled

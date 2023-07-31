"use strict";

sum(10, 10);

function sum(a, b) {
  add = a + b;
  console.log(add);
}

// feature of ECMASCript 5
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

// "use strict";  instructs the browser to use strict mode, which is reduced and safer feature set of javascript


// Notes
// 1)  "use strict" not allowed in function with default parameter
// 2) Strict mode requires that function parameter names be unique

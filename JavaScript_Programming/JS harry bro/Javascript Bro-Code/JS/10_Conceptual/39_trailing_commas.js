// Trailing commas (sometimes called "final commas") can be useful when adding new elements, parameters, or properties to JavaScript code.
// If you want to add a new property, you can add a new line without modifying the previously last line if that line already uses a trailing comma.
// This makes version-control diffs cleaner and editing code might be less troublesome.

const arr = [1, 2, 3];

const object = {
  foo: "bar",
  baz: "qwerty",
  age: 42,
};

// As JSON is based on a very restricted subset of JavaScript syntax, trailing commas are not allowed in JSON.
console.log(JSON.parse('{"foo" : 1 }'));


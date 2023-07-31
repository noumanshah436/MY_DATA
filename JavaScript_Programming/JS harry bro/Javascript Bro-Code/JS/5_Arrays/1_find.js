// The find() = returns the value of the first element that passes a test.

const ages = [3, 10, 18, 20];

arr = ages.find((age) => {
  return age > 18;
});

console.log(arr);

// Definition and Usage

// The find() method executes a function for each array element.
// The find() method returns undefined if no elements are found.
// The find() method does not execute the function for empty elements.
// The find() method does not change the original array.

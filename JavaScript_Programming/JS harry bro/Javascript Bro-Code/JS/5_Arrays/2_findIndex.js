// The findIndex() method executes a function for each array element.

const ages = [3, 10, 18, 20];

arr = ages.findIndex((age) =>{
  return age > 18;
});

console.log(arr)



// The findIndex() method returns the index (position) of the first element that passes a test.
// The findIndex() method returns -1 if no match is found.
// The findIndex() method does not execute the function for empty array elements.
// The findIndex() method does not change the original array.


"use strict";
// The optional chaining (?.) operator accesses an object's property or calls a function.
// If the object accessed or function called is undefined or null, it returns undefined instead of throwing an error.

// The optional chaining operator in JavaScript is convenient as it allows the developer to specify an object's property as being optional, and only return a value if the specified property is not "null" or "undefined" - otherwise return "undefined".

// It's helpful when accessing data from an API, or generally where you're not too sure what data will look like, or knowing where optional fields exist. It can also be used in combination with the nullish coalescing operator to provide smart defaults 🙂

// Syntax;
// obj.val?.prop;
// obj.val?.[expr];
// obj.func?.(args);

const person = {
  name: "DOM",
  age: 28,
  // vehicle: {
  //   year: 2000,
  //   warrenty: {
  //     expiryDate: 2022,
  //   },
  // },
};

// problem:
// console.log(person.vehicle.year);      //  Cannot read property 'year' of undefined

// solution
const vehicle = person.vehicle ? person.vehicle.year : undefined;

// built-in shortcut (?.)
console.log(person.vehicle?.year); //  Cannot read property 'year' of undefined

const expiryDate = person.vehicle?.warrenty?.expiryDate;
console.log(expiryDate);

// optional chaining (?.) operator with the nullish coalescing(??)
// this says that if the vehicle is undefined then return 2019 as default value
const vehicleYear = person.vehicle?.year ?? 2019;
console.log(vehicleYear);

// *************************

const adventurer = {
  name: "Alice",
  cat: {
    name: "Dinah",
  },
};

const dogName = adventurer.dog?.name;
console.log(dogName);
// expected output: undefined

const name = adventurer.name;
console.log(name);
// expected output: undefined

console.log(adventurer.someNonExistentMethod?.());
// expected output: undefined

let object = {
  name: "ABC",
  email: "xyz@abc.com"
};
console.log(object);
// { name: 'ABC', email: 'xyz@abc.com' }


// Adding some properties into the
// above created object...
object.age = 10;
object.contact = 123467890;
object.place = "Earth";
object["country"]= "India";
console.log(object);

// {
//   name: 'ABC',
//   email: 'xyz@abc.com',
//   age: 10,
//   contact: 123467890,
//   place: 'Earth',
//   country: 'India'
// }

// ***********************************


object = {
  name: "ABC",
  email: "xyz@abc.com",
  age: 10,
  contact: 1234567890,
  place: "Earth",
  country: "India",
};


// Removing some properties
// from the above created object
delete object.age; // age property deletion
console.log(object);

// country property deletion
delete object["country"];
console.log(object);

delete object.place; // place property deletion
console.log(object);

// ***********************************

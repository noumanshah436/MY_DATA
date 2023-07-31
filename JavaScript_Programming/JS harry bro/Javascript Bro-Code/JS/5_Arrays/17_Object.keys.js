
// The Object.keys() returns a list of all keys of object as string

storeItems = {
  eggs: { price: 3.77, quantity: 30 },
  milk: { price: 2.22, quantity: 23 },
  butter: { price: 2.0, quantity: 22 },
  carrots: { price: 3.0, quantity: 11 },
  beef: { price: 6.18, quantity: 34 },
  chicken: { price: 5.44, quantity: 34 },
};


// Object.keys(myObj)
console.log(Object.keys(storeItems));

// [ 'eggs', 'milk', 'butter', 'carrots', 'beef', 'chicken' ]

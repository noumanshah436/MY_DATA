console.log('this is tutorial 41');

// ARROW FUNCTIONS

// Creating a regular function
var harry = function (){
    console.log("This is the best person ever")
}

// Converting it to an arrow function
var harry = ()=>{
    console.log("This is the best person ever")
}
harry();

// function returning something
var greet = function(){
    return "Good Morning";
}

// One liners do not require braces/return
// one line will automatically return
var greet = () =>  "Good Morning";

// return object
var greet = () =>  ({name: "harry"});

// Single parameters do not need parenthesis
// but you will have to put parenthesis if there are multiple paramteres
var greet = name =>  "Good Morning " + name + ending;



console.log(greet('Harry'))

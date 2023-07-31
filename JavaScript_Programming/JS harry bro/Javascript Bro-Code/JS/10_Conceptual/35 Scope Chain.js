// Scope Chain
//It is the process in which, JavaScript engine searches for the value of the variables in the scope of the functions. However, the search is in a lexical manner. First of all the engine looks out in the current scope of the current function. If not found, it finds it in the parent funtion.

// If not there, global scope is the last place it checks in. If the variable is not found, it declares the variable in global scope, provided you aren't in strict mode. Hence, to find value of the required variabe, a chain is formed by looking in scopes of different funtions.

// Lexical Scoping
// Lexical scoping is a type of object oriented programming according to which, a child can access parent scope and global scope. Similarly a function can access global scope.


var a = "Hello world";

function first() {
    var b = "I am Rahul.";
    second();

    function second() {
        var c = " Subscribe to RAHULISM";
        console.log(a + b + c);
    }
}
first();

// Hello worldI am Rahul. Subscribe to RAHULISM

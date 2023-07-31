// bind() is used to bind "this" keyword with object

const person1 = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const member = {
  firstName: "Hege",
  lastName: "Nilsen",
};

let fullName = person1.fullName.bind(member);

confirm.log(fullName()); // Hege Nilsen

// ***********************

// When a function is used as a callback, "this" is lost.
// The bind() method solves this problem.


const person = {
  firstName: "John",
  lastName: "Doe",
  display: function () {
    let x = document.getElementById("demo");
    x.innerHTML = this.firstName + " " + this.lastName;
  },
};

let display = person.display.bind(person);
setTimeout(display, 3000);


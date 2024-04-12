// Traditional function expression
function stuff() {
  const add = function (a, b) {
    return a + b;
  };

  // Arrow function
  const add2 = (a, b) => a + b;

  // Traditional function expression
  const multiply = function (a, b) {
    return a * b;
  };

  // Arrow function with implicit return
  const multiply2 = (a, b) => a * b;
}

const person = {
  name: "John",
  greet: function () {
    // Traditional function expression
    setTimeout(function () {
      console.log("Hello, " + this.name); // Outputs: "Hello, undefined"
    }, 1000);

    // Arrow function maintains the outer context
    setTimeout(() => {
      console.log("Hello, " + this.name); // Outputs: "Hello, John"
    }, 1000);
  },
};

person.greet();

const obj = {
  name: "Alice",
  greet: function () {
    setTimeout(() => {
      console.log("Hello, " + this.name); // "this" refers to "obj"
    }, 1000);
  },
};

obj.greet(); // Outputs: "Hello, Alice"

const obj2 = {
  name: "Alice",
  greet: function () {
    setTimeout(function () {
      console.log("Hello, " + this.name); // "this" is not what we expect
    }, 1000);
  },
};

obj2.greet(); // Outputs: "Hello, undefined"

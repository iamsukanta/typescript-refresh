// Scope practice in JavaScript
// function myFunction() {
//   var name = "Sukanta";
// }
// myFunction();

// console.log(i); // This will throw a ReferenceError because 'name' is not defined in this scope.
// var i;

// Closere practice in JavaScript

function closureTest() {
  let count = 0;
  return function increment() {
    count++;
    console.log(count);
    return count;
  }
}

const incrementFunction = closureTest();
console.log(incrementFunction());
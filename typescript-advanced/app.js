// Scope practice in JavaScript
function outer() {
  

  function inner() {
    console.log(outerVar); // ✅ Accesses outer variable
  }

  inner();
  var outerVar = "I am outer";
}

outer();
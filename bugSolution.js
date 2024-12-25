function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero");
  }
  return a / b;
}

module.exports = { add, subtract, multiply, divide };

//added try catch block to handle exceptions
try{
    const operations = require('./bug.js');
    console.log(operations.divide(10, 0));
} catch(error){
    console.error('Error:', error.message);
}

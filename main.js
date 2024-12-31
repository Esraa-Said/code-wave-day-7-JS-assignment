// Task - 1: Modify Array Elements & Length
console.log("Task - 1: Modify Array Elements & Length");
let fruits = ["apple", "banana", "orange"];
console.log(`The Original Array: [${fruits}]`);
fruits.push("watermelon");
console.log(`Push watermelon to the array: [${fruits}]`);
fruits.pop();
console.log(`Pop the last element of the array: [${fruits}]`);
fruits.shift();
console.log(`Pop the first element of the array: [${fruits}]`);
fruits.unshift("lemon");
console.log(`Add element at the beginning of the array: [${fruits}]`);
console.log("==============================================");


// Task - 2:  Filter and Map Array Elements
console.log("Task - 2:  Filter and Map Array Elements");
let numbers = [1, 2, 3, 4, 5, 6];
let evenNumbers = numbers.filter((e)=> e%2==0);
console.log(`Array with even numbers only [${evenNumbers}]`);
let squareArray = numbers.map((e)=> Math.sqrt(e).toFixed(2));
console.log(`Array with squared numbers  [${squareArray}]`);

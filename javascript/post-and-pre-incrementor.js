let numA = 5;

let numB = numA++; // NumB is 5. it stores a value in numA before incrementation into numB.

let numC = 5;

let numD = ++numC;

console.log("Number B " + numB); //5
console.log("Number A " + numA); //6
console.log("------------------------");
console.log("Number C " + numC); //6
console.log("Number D " + numD); //6

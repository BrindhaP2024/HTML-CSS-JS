// Example of immutability with an array
const originalArray = [1, 2, 3];
const newArray = [...originalArray, 4]; 

console.log(originalArray); 
console.log(newArray); 

// Example of immutability with objects
const originalObject = { name: 'Leena', age: 23 };
const newObject = { ...originalObject, age: 25 }; 

console.log(originalObject); 
console.log(newObject); 

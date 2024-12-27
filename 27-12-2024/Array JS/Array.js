// Initialize an array
let names = ["Amit", "Sita", "Raj", "Priya", "Sunita", "Ravi", "Anjali", "Vijay", "Geeta", "Arjun"];
console.log("Initial Names Array: ", names);

// push() - Adds one or more elements to the end of an array
names.push("Ravi", "Kiran");
console.log("After push(): ", names);

//pop() - Removes the last element from an array
let lastName = names.pop();
console.log("After pop(): ", names);
console.log("Removed name: ", lastName);

//shift() - Removes the first element from an array
let firstName = names.shift();
console.log("After shift(): ", names);
console.log("Removed name: ", firstName);

//unshift() - Adds one or more elements to the beginning of an array
names.unshift("Nisha", "Rani");
console.log("After unshift(): ", names);

//splice() - Adds or removes elements from anywhere in the array
names.splice(3, 1, "Ajay", "Preeti"); // Remove 1 element at index 3 and add "Ajay" and "Preeti"
console.log("After splice(): ", names);

//slice() - Returns a shallow copy of a portion of an array into a new array object
let slicedNames = names.slice(2, 5); // Get a sub-array from index 2 to index 5 (not inclusive of 5)
console.log("After slice(): ", slicedNames);
console.log("Original Array remains: ", names);

//concat() - Merges two or more arrays
let moreNames = ["Suresh", "Neha"];
let allNames = names.concat(moreNames);
console.log("After concat(): ", allNames);

//join() - Joins all elements of an array into a string
let nameString = names.join(", ");
console.log("After join(): ", nameString);

//map() - Creates a new array with the results of calling a function on every element in the array
let nameLengths = names.map(name => name.length);
console.log("After map(): ", nameLengths); // Array of lengths of each name

//filter() - Creates a new array with all elements that pass the test implemented by the provided function
let longNames = names.filter(name => name.length > 4);
console.log("After filter(): ", longNames); // Only names longer than 4 characters

//reduce() - Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value
let totalLength = names.reduce((acc, name) => acc + name.length, 0);
console.log("After reduce(): ", totalLength); // Total length of all names

//find() - Returns the first element in the array that satisfies the provided testing function
let foundName = names.find(name => name.startsWith("A"));
console.log("After find(): ", foundName); // First name starting with 'A'

//indexOf() - Returns the first index at which a given element can be found in the array, or -1 if it is not present
let index = names.indexOf("Priya");
console.log("After indexOf(): ", index); // Index of "Priya" in the array

//includes() - Determines whether an array contains a certain element
let isIncluded = names.includes("Raj");
console.log("After includes(): ", isIncluded); // True if "Raj" is in the array

//some() - Tests whether at least one element in the array passes the test implemented by the provided function
let hasShortName = names.some(name => name.length < 4);
console.log("After some(): ", hasShortName); // True if there's any name shorter than 4 characters

//every() - Tests whether all elements in the array pass the test implemented by the provided function
let allLongNames = names.every(name => name.length >= 4);
console.log("After every(): ", allLongNames); // True if all names have lengths >= 4

//forEach() - Executes a provided function once for each array element
console.log("After forEach():");
names.forEach((name, index) => {
    console.log(`${index + 1}: ${name}`);
});

//sort() - Sorts the elements of an array in place and returns the sorted array
names.sort();
console.log("After sort(): ", names);

//reverse() - Reverses the order of the elements in the array
names.reverse();
console.log("After reverse(): ", names);

//fill() - Changes all elements in an array to a static value from a start index to an end index
names.fill("Kumar", 1, 3); // Replace elements from index 1 to index 3 with "Kumar"
console.log("After fill(): ", names);

//from() - Creates a new array instance from an array-like or iterable object
let nameArray = Array.from("Abhishek");
console.log("After from(): ", nameArray); 

//findIndex() - Returns the index of the first element that satisfies the provided testing function
let indexOfLongName = names.findIndex(name => name.length > 5);
console.log("After findIndex(): ", indexOfLongName); 

const array1 = ['a', 'b', 'c'];
const iterator = array1.values();

for (const value of iterator) {
  console.log(value);
}

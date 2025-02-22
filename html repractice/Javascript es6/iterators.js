const str = "hello";
const stringIterator = str[Symbol.iterator]();

console.log(stringIterator.next().value);  
console.log(stringIterator.next().value);  
console.log(stringIterator.next().value);  
console.log(stringIterator.next().value);  
console.log(stringIterator.next().value);  
console.log(stringIterator.next().value);  

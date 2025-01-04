let counter = 0;
function incrementCounter() {
  counter++; // Modifies external state
  return counter;
}
// Changes the external 'counter' variable
console.log(incrementCounter()); 
console.log(incrementCounter()); 
console.log(incrementCounter()); 
console.log(incrementCounter()); 
console.log(incrementCounter()); 
console.log(incrementCounter()); 
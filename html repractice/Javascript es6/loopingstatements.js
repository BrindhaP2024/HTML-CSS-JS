arr = [1,2,34,56,7,654,43];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }

// for of - array

for (const item of arr) {
    console.log(item);
  }
// for in -  object
let obj = { name: 'James', age: 23, job: 'developer' };
for (let key in obj) {
   console.log(key + ": " + obj[key]);
  }

// while loop

let i = 1; 

while (i <= 5) { 
  console.log(i); 
  i++; 
}

let j = 1; // Initialize counter

do {
  console.log(j);
  j++; 
} while (j <= 5);

let userInput = "";
while (userInput !== "yes" && userInput !== "no") {
  userInput = prompt("Do you want to continue? (yes/no)");
}
console.log(`User response: ${userInput}`);

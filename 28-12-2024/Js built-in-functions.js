// parseInt() - Converts a string to an integer
let str = "123";
let num = parseInt(str);
console.log("parseInt:", num);

let hexStr = "0xFF";  
let hexNum = parseInt(hexStr, 16);  
console.log("parseInt with base 16:", hexNum); 


// parseFloat() - Converts a string to a floating-point number
let str1 = "3.14";
let floatNum = parseFloat(str1);
console.log("parseFloat:", floatNum);  

let str2 = "10.5abc"; 
let floatNum2 = parseFloat(str2);  
console.log("parseFloat with invalid string:", floatNum2);  


// toUpperCase() - Converts a string to uppercase
let lowerStr = "hello world";
let upperStr = lowerStr.toUpperCase();
console.log("toUpperCase:", upperStr); 


// toLowerCase() - Converts a string to lowercase
let upperStr2 = "HELLO WORLD";
let lowerStr2 = upperStr2.toLowerCase();
console.log("toLowerCase:", lowerStr2);  


// Math.max() - Returns the largest of zero or more numbers
let maxNum = Math.max(10, 20, 30, 40, 50);
console.log("Math.max:", maxNum);

let noNum = Math.max(); 
console.log("Math.max with no arguments:", noNum); 


// Math.min() 
let minNum = Math.min(10, 20, 30, 40, 50);
console.log("Math.min:", minNum); 


// Array.isArray() - Checks if a value is an array
let arr = [1, 2, 3];
let notArr = "Hello, world!";
console.log("Array.isArray:", Array.isArray(arr));   
console.log("Array.isArray:", Array.isArray(notArr));


// String.prototype.split() - Splits a string into an array
let sentence = "JavaScript is awesome";
let words = sentence.split(" "); 
console.log("split():", words);  


// Date() - Returns the current date and time
let currentDate = new Date();
console.log("Current Date:", currentDate);  

let specificDate = new Date("2024-12-28");
console.log("Specific Date:", specificDate); 


// setTimeout() - Executes code after a specified delay
setTimeout(function() {
    console.log("This message is delayed by 2 seconds.");
}, 2000); 


// setInterval() - Repeats code at specified intervals
let counter = 0;
let intervalID = setInterval(function() {
    console.log("Counter:", counter);
    counter++;

    if (counter === 5) {
        clearInterval(intervalID);
    }
}, 1000);  


// JSON.stringify() - Converts a JavaScript object to a JSON string
let obj = { name: "A", age: 23 };
let jsonString = JSON.stringify(obj);
console.log("JSON.stringify:", jsonString); 


// JSON.parse() - Converts a JSON string to a JavaScript object
let jsonString2 = '{"name":"B","age":23}';
let parsedObj = JSON.parse(jsonString2);
console.log("JSON.parse:", parsedObj);  

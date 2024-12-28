// Object Literal Syntax - Creating an object
const person1 = {
    name: "Rahul",
    age: 25,
    speak: function() {  
        console.log("Hello, " + this.name);
    }
};

console.log(person1.name);  
person1.speak(); 


// Using the new Object() Syntax - Creating an empty object and adding properties
const person2 = new Object();
person2.name = "Priya";
person2.age = 28;
person2.welcome = function() {  
    console.log("Hello, " + this.name);
};

console.log(person2.name);
person2.welcome();  


function Person(name, age) {
    this.name = name;
    this.age = age;
    this.introduce = function() {  
        console.log("Hello, I am " + this.name);
    };
}

const person3 = new Person("Amit", 32);
const person4 = new Person("Neha", 26);

console.log(person3.name); 
person3.introduce();  


// Using Object.create() to create an object with a prototype
const personPrototype = {
    showInfo: function() { 
        console.log("Hello, my name is " + this.name);
    }
};

const person5 = Object.create(personPrototype);
person5.name = "Arjun";
person5.showInfo(); 


// Using class Syntax (ES6) to create an object
class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {  
        console.log("Hi, I am " + this.name);
    }
}

const person6 = new PersonClass("Kiran", 40);
const person7 = new PersonClass("Simran", 33);

console.log(person6.name); 
person7.introduce();  


// Using Object.assign() to merge objects
const person8 = { name: "Raj", age: 30 };
const person9 = { gender: "Male", occupation: "Engineer" };

const mergedPerson = Object.assign({}, person8, person9);

console.log(mergedPerson);  


// Using call() or apply() to create an object
function PersonWithCall(name, age) {
    this.name = name;
    this.age = age;
    this.describe = function() { 
        console.log("Hello, I am " + this.name);
    };
}

const person10 = {};
PersonWithCall.call(person10, "Sita", 29);
person10.describe();  // Calling 'describe' function


// Factory Function to create objects
function createPerson(name, age) {
    return {
        name: name,
        age: age,
        present: function() { 
            console.log("I am " + this.name + " and I am " + this.age + " years old.");
        }
    };
}

const person11 = createPerson("Vikram", 34);
const person12 = createPerson("Geeta", 30);

console.log(person11.name);
person12.present(); 


// Using `[]` for object property names (Dynamic Keys)
let dynamicKey = "city";
let person13 = {
    name: "Manoj",
    age: 35,
    [dynamicKey]: "Mumbai"  
};

console.log(person13.name);  
console.log(person13.city);  // Accessing dynamic property


// Accessing object properties using `[]` (Bracket Notation)
const person14 = {
    name: "Rajesh",
    "favorite food": "Biryani"
};

// Accessing properties using bracket notation
console.log(person14["name"]);  
console.log(person14["favorite food"]);  


// Using `[]` with Object for Array-Like Properties
const person15 = {
    name: "Priya",
    age: 28,
    0: "First item", 
    1: "Second item"
};

console.log(person15[0]);
console.log(person15[1]); 


// Using `[]` for Destructuring Arrays in Objects
const obj1 = {
    arr: [10, 20, 30]
};

const { arr: [a, b, c] } = obj1;  // Destructuring array inside an object 

console.log(a, b, c); 


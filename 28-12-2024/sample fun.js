function sayHello(){
    console.log('welcome to js function decleration');
}
sayHello();

// Anonymous function
let makefun = function(passenger_name){
    console.log(passenger_name);
    
}
makefun('harini')
// Arrow function
const sum = () =>2+5*10/2;
console.log(sum());

let share = () => "Arrow function is here!!"
console.log(share());
// Invoked function
function add(a, b) {
    return a + b;
}

let result = add(5, 3);  // Invoking the function
console.log(result);
// callback function
function fetchData(callback) {
    setTimeout(() => {
        console.log("Data fetched");
        callback(); 
    }, 1000);
}

function onComplete() {
    console.log("Callback executed: Data processing complete.");
}

fetchData(onComplete);


const fruits = ["Apple", "Banana", "Cherry"];
console.table(fruits);
console.group("Fruit Info");
console.log("Apple: $1.99");
console.log("Banana: $0.99");
console.groupEnd();

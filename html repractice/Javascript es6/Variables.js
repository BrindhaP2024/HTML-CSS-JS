// global scope -redeclared and reassignable 
var a = "20";
console.log(a);

var a; //redeclared
var a = 23; //re-initializzed
console.log(a);

var x = 233;
function varCheck(){
    var a = 2345;
    console.log(a);
    console.log(x);
    
    
}
varCheck()
// Hoisting makes undefined 
console.log(xx);
var xx= 202;

varHoist();
function varHoist(){
    var n = 23313;
    console.log(n);
    
}

// Let  --> block scope

let x1 = 0;
x1 = 33; // can be re-initialized
console.log(x1);


// let x1 --cannot be redeclared

// console.log(x2);
let x2=554;  //Hoisting can't access 'x2' before initialization moves to tdz and waits for the initialization 

// const
const const1 = 43;
console.log(const1);

// console.log(const2);
const const2 = 33;

// types of errors 

// 1. syntax and 2.Logical errors

const checkObj = {
    name:"Brindha",
    role:"Mean Stack developer"
}
console.log(checkObj.name,checkObj.role);










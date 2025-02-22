function fun(){
    console.log("hello");
    
}
fun();
const add = function add(a,b) {
    return a+b;
};
console.log(add(9,3));

const applyArrow = (a,b) => a*b;
console.log(applyArrow(20,56));

(function() {
    console.log('IIFE');
    
})();

(()=>{
    console.log("Arrow IIFE function")
})();

// higher order function - A Function that takes up the another function as an argument or a return function

function higherOrder(fn){
    return function(){
        console.log("Before calling the passed function");
        fn();
        console.log("After calling the passed function");
    };

}


// Module Pattern

const counterModule = (function () {
    let counter = 0;

    return {
        increment: function () {
            counter++;
            console.log(counter);
        },
        decrement: function () {
            counter--;
            console.log(counter);
        },
        getCount: function () {
            return counter;
        }
    };
})();

// Usage
counterModule.increment();
counterModule.increment(); 
counterModule.decrement(); 
console.log(counterModule.getCount());

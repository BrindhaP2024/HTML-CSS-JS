let arr = [9,0,3,5,6,90];

let array = new Array(1,2,4,4,68,99);
console.log(array,array.length,array.concat(arr));
console.log(arr[5]);
console.log(array.push(3,4,54),array);
console.log(array.pop());  //pops out the last element

console.log(arr.shift(),arr,arr.unshift(1,2,32));
console.log(arr);

console.log(arr.slice(0,2),arr.splice(2,3,...array));
console.log(arr.indexOf(2),arr.lastIndexOf(90));

console.log(arr.includes(2),array.includes(22));
console.log(arr.find(x => x>3));

// Looping through an array 
// map 

const arrProducts = [
    {
        id:1,name:'laptop',price:100000
    },
    {
        id:2,name:'watch',price:2200
    }
];
const discountRate = 0.2;
const discountedProducts = arrProducts.map(
    product=>({...product, price:product.price - product.price * discountRate


    })
);
console.log(discountedProducts);


const wishlist = [
    { id: 1, name: 'Laptop', price: 1000, savedForLater: true },
    { id: 2, name: 'Smartphone', price: 500, savedForLater: false },
    { id: 3, name: 'Headphones', price: 100, savedForLater: true }
  ];
  
  const savedProducts = wishlist.filter(item => item.savedForLater)
      .map(item =>({
        name:item.name,
        price:item.price
      }));
      console.log(savedProducts);
      
  const savedItems = wishlist.filter(item => item.savedForLater)  // Filter saved items
    .map(item => ({
      name: item.name,
      price: item.price
    }));
  
  console.log(savedItems);
 
n = [22,33,3]
const result = n.filter(no => no < 2 || no>=22);
console.log(result);

const names = ["arjun","vicky","anitha"];
    const nameStart = names.filter(word => word.startsWith('v')) && names.filter(word => word.startsWith('a'));
console.log(nameStart);

// logical operator takes the leading filter output 

// reduce ---> reducing
// Track income and expenses and calculate the net income for individuals or businesses.
// Show users their balance, taking into account income and expense transactions.
const transactions = [
    { type: 'income', amount: 2000 },
    { type: 'expense', amount: 500 },
    { type: 'income', amount: 1200 },
    { type: 'expense', amount: 300 }
  ];
  
  const netIncome = transactions.reduce((accumulator, transaction) => {
    if (transaction.type === 'income') {
      return accumulator + transaction.amount;
    } else if (transaction.type === 'expense') {
      return accumulator - transaction.amount;
    }
    return accumulator;
  }, 0);
  
  console.log(`Net Income: rs.${netIncome}`);  
  
const forEachArr = [1,346,65,9];
// const checkPrime = forEachArr.forEach(i => i > 60 )
//   console.log(checkPrime);
// )};

forEachArr.forEach(i =>{
    if(i > 60){
        console.log(i);
 }
});

// some
const numbers = [1, 3, 5, 7, 8];

const hasEvenNumber = numbers.some(num => num % 2 === 0);

console.log(hasEvenNumber);  

const values = ['a', 'b', 'r'];

const allStrings = values.every(value => typeof value === 'string');

console.log(allStrings); 

let nums = [50, 30, 20, 10, 40];
console.log("Original Numbers:", nums);

nums.sort((a, b) => a - b);
console.log("Sorted Numbers (Ascending):", nums);

nums.reverse();
console.log("Reversed Sorted Numbers:", numbers);

let arr_S = [1, 2, 3, 4, 5];
arr_S.fill(0);
console.log("Array after fill():", arr_S);

let copyArr = [1, 2, 3, 4, 5, 6];
copyArr.copyWithin(2, 0, 3);
console.log("Array after copyWithin():", copyArr);

let words = ['Hello', 'World', 'JavaScript'];
let sentence = words.join(' ');
console.log("Joined Array:", sentence);

let str = 'Hello';
let strToArray = Array.from(str);
console.log("Array from string:", strToArray);

let isArrayCheck1 = Array.isArray(numbers);
let isArrayCheck2 = Array.isArray(str);
console.log("Is 'numbers' an array?", isArrayCheck1);
console.log("Is 'str' an array?", isArrayCheck2);

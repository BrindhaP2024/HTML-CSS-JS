// let year = prompt('In which year was ECMA introduced?');
// if(year ==2015) 
//     console.log('correct!You are smart');

// let condition = year = 2015;
 
// if(condition){
//     console.log("good to go!!!");
// }
// else if (year > 2020){
//     console.log('No,try again');
// }
// else{
//    console.log("incorrect");
// }
    
let discount;
memberShip = 'gold';
switch (memberShip){
    case 'Bronze':
        discount = 5;
        break;
    case 'silver':
        discount = 10;
        break;
    case 'gold':
        discount= 12;
        break;
    case 'platinum':
        discount = 15;
        break;
    default:
        discount = 0;
        console.log('Invalid membership');
        break;
        
    }
    console.log(`your discout ${discount} on your ${memberShip}`);
    
    function checkEligible(cartItems){
        let cartMessage = cartItems.length > 0?`you have ${cartItems.length}`:"empty"
     console.log(cartMessage);
     
    }
checkEligible([{ name: "Laptop", price: 899 }]);
checkEligible([]);  


    
const calculatePrice = discount => tax => price => {
    let discountedPrice = price - (price * discount);
    let finalPrice = discountedPrice + (discountedPrice * tax);
    return finalPrice.toFixed(2);
};

const applySummerSale = calculatePrice(0.10); 
const applyGST = applySummerSale(0.05);

console.log(applyGST(1000));
console.log(applyGST(500)); 

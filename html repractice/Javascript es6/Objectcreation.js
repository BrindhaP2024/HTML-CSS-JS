const product1 = {
    name: "Laptop",
    price: 1000,
    category: "Electronics"
};

const product2 = new Object();
product2.name = "Smartphone";
product2.price = 500;
product2.category = "Electronics";

console.log(product1.name);
console.log(product2.price);

delete product1.category;
console.log(product1.category);

const productMethods = {
    showDetails: function() {
        console.log(`${this.name} - $${this.price}`);
    }
};

const product3 = Object.create(productMethods);
product3.name = "Tablet";
product3.price = 300;
product3.showDetails();

const product4 = {
    name: "Headphones",
    specs: {
        brand: "Sony",
        type: "Wireless",
        battery: "20 hours"
    }
};

console.log(product4.specs.brand);

const product5 = {
    name: "Smartwatch",
    brand: "Apple",
    getDescription: function() {
        return `${this.name} by ${this.brand}`;
    }
};

console.log(product5.getDescription());

const { name, brand } = product5;
console.log(name);
console.log(brand);

const { name: productName, brand: productBrand } = product5;
console.log(productName);
console.log(productBrand);

console.log(Object.keys(product5));
console.log(Object.values(product5));
console.log(Object.entries(product5));

const product6 = { name: "Camera", price: 800 };
Object.freeze(product6);
product6.price = 900;
product6.color = "Black";
console.log(product6);

const product7 = { name: "Speakers", price: 150 };
Object.seal(product7);
product7.price = 170;
product7.color = "Red";
console.log(product7);

const obj1 = { a: 10, b: 20 };
const obj2 = { b: 30, c: 40 };
const mergedProduct = Object.assign(obj1, obj2);
console.log(mergedProduct);

const productArray = [
    ["name", "Washing Machine"],
    ["price", 600]
];
const productObj = Object.fromEntries(productArray);
console.log(productObj);

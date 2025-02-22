function Product(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
}

Product.prototype.addStock = function (quantity) {
    this.quantity += quantity;
    console.log(`${quantity} items added to ${this.name}. Current stock: ${this.quantity}`);
};

Product.prototype.updatePrice = function (newPrice) {
    this.price = newPrice;
    console.log(`${this.name} price updated to $${this.price}`);
};

Product.prototype.applyDiscount = function (discountPercentage) {
    const discountAmount = (this.price * discountPercentage) / 100;
    this.price -= discountAmount;
    console.log(`${this.name} price after ${discountPercentage}% discount: $${this.price}`);
};

function Electronics(name, price, quantity, brand, warranty) {
    Product.call(this, name, price, quantity);
    this.brand = brand;
    this.warranty = warranty;
}

Electronics.prototype = Object.create(Product.prototype);

Electronics.prototype.getWarrantyDetails = function () {
    console.log(`${this.name} comes with a ${this.warranty} year warranty.`);
};

const phone = new Electronics("Smartphone", 500, 50, "BrandX", 2);
const laptop = new Electronics("Laptop", 1000, 30, "BrandY", 1);

phone.addStock(20);
phone.updatePrice(450);
phone.applyDiscount(10);
phone.getWarrantyDetails();

laptop.addStock(15);
laptop.updatePrice(950);
laptop.applyDiscount(5);
laptop.getWarrantyDetails();

class Product {
    constructor(name, category, price) {
        this.name = name;
        this.category = category;
        this.price = price;
    }

    showDetails() {
        console.log(`Product: ${this.name}, Category: ${this.category}, Price: $${this.price}`);
    }

    applyDiscount(discountPercentage) {
        const discountAmount = (this.price * discountPercentage) / 100;
        this.price -= discountAmount;
        console.log(`${this.name} has been discounted by ${discountPercentage}%. New price: $${this.price}`);
    }
}

class Electronics extends Product {
    constructor(name, category, price, warranty) {
        super(name, category, price);
        this.warranty = warranty;
    }

    displayWarranty() {
        console.log(`${this.name} comes with a ${this.warranty} year warranty.`);
    }

    showDetails() {
        super.showDetails();
        console.log(`This electronic product has a ${this.warranty} year warranty.`);
    }
}

class Clothing extends Product {
    constructor(name, category, price, size) {
        super(name, category, price);
        this.size = size;
    }

    displaySize() {
        console.log(`${this.name} is available in size ${this.size}.`);
    }

    showDetails() {
        super.showDetails();
        console.log(`This clothing item is available in size ${this.size}.`);
    }
}

const product1 = new Product("Generic Product", "General", 100);
const electronicProduct = new Electronics("Smartphone", "Electronics", 699, 2);
const clothingProduct = new Clothing("T-Shirt", "Clothing", 20, "L");

product1.showDetails();
product1.applyDiscount(10);

console.log("-----");

electronicProduct.showDetails();
electronicProduct.applyDiscount(15);
electronicProduct.displayWarranty();

console.log("-----");

clothingProduct.showDetails();
clothingProduct.displaySize();

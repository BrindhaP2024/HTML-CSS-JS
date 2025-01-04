// Factory Pattern for creating vehicles
function VehicleFactory(type) {
    if (type === "car") {
        return new Car();
    } else if (type === "bike") {
        return new Bike();
    } else if (type === "truck") {
        return new Truck();
    }
}

// Car Constructor
function Car() {
    this.drive = function () {
        console.log("Driving a car");
    };
}

// Bike Constructor
function Bike() {
    this.drive = function () {
        console.log("Riding a bike");
    };
}

// Truck Constructor
function Truck() {
    this.drive = function () {
        console.log("Driving a truck");
    };
}

// Usage
const car = VehicleFactory("car");
car.drive(); // Driving a car

const bike = VehicleFactory("bike");
bike.drive(); // Riding a bike

const truck = VehicleFactory("truck");
truck.drive(); // Driving a truck

// Constructor function
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
// Adding a method to the prototype
Person.prototype.fullName = function() {
    return `${this.firstName} ${this.lastName}`;
};
// Creating instances
const person1 = new Person('AA', 'BB');
const person2 = new Person('CC', 'DD');

console.log(person1.fullName()); 
console.log(person2.fullName()); 

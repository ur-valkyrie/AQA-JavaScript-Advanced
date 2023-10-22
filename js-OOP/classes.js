// Task 3
class ProductClass {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    getTotalPrice() {
        return this.price * this.quantity
    }

    purchase(quantity) {
        if (this.quantity === 0) {
            return `No stock for ${this.name}`;
        } else if (quantity <= this.quantity) {
            this.quantity -= quantity;
            return `Purchased ${quantity} of ${this.name}. Remaining stock: ${this.quantity}`;
        } else {
            return `Selected quantity of ${this.name} more than In Stock. Available stock: ${this.quantity}`;
        }
    }
}

const sneakers = new ProductClass("sneakers", 85, 100);
const jeans = new ProductClass("jeans", 35, 0);
const blouse = new ProductClass("blouse", 25, 200);

console.log(sneakers.getTotalPrice());
console.log(jeans.getTotalPrice());
console.log(blouse.getTotalPrice());

console.log(sneakers.purchase(90));
console.log(jeans.purchase(50));
console.log(blouse.purchase(210));

// Task 4
class CarClass {
    #speed;
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.#speed = 0;
    }

    getCarInfo() {
        throw new Error("Error");
    }

    accelerate(speed) {
        this.#speed += speed;
    }

    brake(speed) {
        this.#speed -= speed;
    }
}

class PorscheClass extends CarClass {
    #color
    constructor(make, model, year, color) {
        super(make, model, year);
        this.#color = color;
    }

    getCarInfo() {
        console.log(`Your make is: ${this.make}`);
        console.log(`Your model is: ${this.model}`);
        console.log(`Your year is: ${this.year}`);
        console.log(`Your color is: ${this.#color}`);
    }

    get myCurrentColor() {
        return this.#color;
    }

    set myCurrentColor(color) {
        this.#color = color;
    }
}

const porsche = new PorscheClass("Porsche", "Cayman S", 2006, "Blue");
porsche.getCarInfo();
porsche.accelerate(300);
porsche.brake(150);
porsche.myCurrentColor = "Pink";
porsche.getCarInfo();

// Task 5
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}

class PeopleRegistry extends Person {
    constructor(firstName, lastName, age) {
        super(firstName, lastName, age);
        this.people = [];
    }

    addPerson(person) {
        this.people.push(person);
    }

    removePerson(firstName, lastName) {
        this.people = this.people.filter(person => person.firstName !== firstName && person.lastName !== lastName);
    }

    findPerson(firstName, lastName) {
        const foundPerson = this.people.filter(person => person.firstName === firstName && person.lastName === lastName);
        if (foundPerson.length === 0) {
            console.log("Person is not found");
        }
        return foundPerson;
    }

    listPeople() {
        this.people.forEach (person => {
            console.log(`Name: ${person.firstName}`);
            console.log(`Last name: ${person.lastName}`);
            console.log(`Age: ${person.age}`);
            console.log(); // for separating persons
        })
    }
}

const registry = new PeopleRegistry();

const person1 = new Person("Alison", "Argent", 27);
const person2 = new Person("Levi", "Akkerman", 32);

registry.addPerson(person1);
registry.addPerson(person2);

registry.listPeople();
console.log(registry.findPerson("Alison", "Argent"));
registry.removePerson("Levi", "Akkerman");
//after removal
registry.listPeople();


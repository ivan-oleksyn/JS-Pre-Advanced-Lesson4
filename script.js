// Task 1
class Worker {
    constructor(firstName, lastName, rate, days) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.rate = rate;
        this.days = days;
    }
    getSalary() {
        let salary = this.rate * this.days;
        return console.log(`Salary : ${salary}`)
    }
}
const worker = new Worker('Ivan', 'Ivanov', '100', '26');
console.log(worker.firstName);
console.log(worker.lastName);
console.log(worker.rate);
console.log(worker.days);
worker.getSalary();

// Task 2
class MyString {
    ucFirst(string) {
        this.string = string;
        if (!this.string) return str;
        return this.string[0].toUpperCase() + this.string.slice(1);
    }
    reverse(string) {
        this.string = string;
        let reversstr = "";
        for (let i = this.string.length - 1; i >= 0; i--) {
            reversstr = reversstr + this.string[i];
        }
        return reversstr;
    }
    ucWords(string) {
        this.string = string;
        let splitStr = this.string.toLowerCase().split(' ');
        for (let i = 0; i < splitStr.length; i++) {
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        }
        return splitStr.join(' ');
    }
}
const str = new MyString();
console.log(str.ucFirst('ivan'));
console.log(str.reverse('ivan'));
console.log(str.ucWords('ivan ivan ivan'));

// Task3
class CoffeeMake {
    constructor(coffeeType, ingredWater = 'water', ingredCoffee = 'coffee', ingredSugar = 'sugar') {
        this.coffeeType = coffeeType;
        this.ingredWater = ingredWater;
        this.ingredCoffee = ingredCoffee;
        this.ingredSugar = ingredSugar;
    }
    on() {
        let onResult = `Making  ${this.coffeeType}`;
        return onResult;
    }
    off() {
        let offResult = 'Your drink is ready!';
        return offResult;
    }
}

class DripCoffee extends CoffeeMake {
    esspresso() {
        let esspresso = `Esspresso ingredients: ${this.ingredWater}, ${this.ingredCoffee}, ${this.ingredSugar}`;
        return esspresso;
    }
}
let dripCoffee = new DripCoffee('esppresso');
console.log(dripCoffee.on());
console.log(dripCoffee.esspresso());
console.log(dripCoffee.off());

class CarobCoffee extends CoffeeMake {
    constructor(coffeeType, ingredWater, ingredCoffee, ingredSugar, ingredMilk = 'milk') {
        super(coffeeType, ingredWater, ingredCoffee, ingredSugar);
        this.ingredMilk = ingredMilk;
    }
    late() {
        let late = `Late ingredients: ${this.ingredWater}, ${this.ingredCoffee}, ${this.ingredSugar}, ${this.ingredMilk}`;
        return late;
    }
}
let carobCoffee = new CarobCoffee('late');
console.log(carobCoffee.on());
console.log(carobCoffee.late());
console.log(carobCoffee.off());

class CoffeeMachine extends CarobCoffee {
    constructor(coffeeType, ingredWater, ingredCoffee, ingredSugar, ingredMilk = 'milk', ingredChoco = 'chocolate') {
        super(coffeeType, ingredWater, ingredCoffee, ingredSugar);
        this.ingredMilk = ingredMilk;
        this.ingredChoco = ingredChoco;
    }
    macaccino() {
        let macaccino = `Macaccino ingredients: ${this.ingredWater}, ${this.ingredCoffee}, ${this.ingredSugar}, ${this.ingredMilk}, ${this.ingredChoco}`;
        return macaccino;
    }
}
let coffeeMachine = new CoffeeMachine('macaccino');
console.log(coffeeMachine.on());
console.log(coffeeMachine.macaccino());
console.log(coffeeMachine.off());
//a class that defines how 
//a coffe machine shall work
class CoffeeMachine {

    constructor() {
        this.pluggedIn = false;
        this.connectedToWater = false;
        this.numberOfCups = 0;
        this.insertedMoney = 0;
        //these two properties in gram
        this.amountOfCoffee = 13;
        this.coffeePerCup = 13;
        this.makecoffee = false;
        this.coffeeServed = false;


    }
    //mainteance of the coffe machine
    PlugIn() {
        this.pluggedIn = true;
    }
    connectToWater() {
        this.connectedToWater = true;
    }
    fillWithCoffee(amount) {
        this.amountOfCoffee = 13;
    }
    fillWithCups(amount) {
        this.numberOfCups = 1;
    }
    insertMoney(inserted) {
        this.insertedMoney = 10; 
    }
    pressStartButton() {
        this.makingcoffee = true;
    }

    serveACupOfCoffee() {
    
        this.coffeeServed = true;
    }
    //internal use of the machine

    brewCoffee() {
        //one cup at a time
    }

    dispensecup() {

    }
    dispenseCoffee() {

    }

}

//Export the Coffemachine class
module.exports = CoffeeMachine;




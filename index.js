//a class that defines how 
//a coffe machine shall work
class CoffeeMachine {

    constructor() {
        this.pluggedIn = false;
        this.connectedToWater = false;
        // in grams how much coffee
        this.PowderPerCupCoffe = 0;
        this.PowderPerCupCapuccino = 0;
        this.PowderPerCupChocolate = 0;
        this.CoffeButton = false
        this.ChocolateButton = false
        this.CapuccinoButton = false
        this.numberOfCups = 0;
        this.insertedMoney = 0;
        this.insertedDebitCard = 0;
        //these two properties in gram
        this.amountOfCoffeePowder = 350;
        this.amountOfCapuccinoPowder = 350;
        this.amountOfChocolatePowder = 350;
        this.makecoffee = false;
        this.coffeeServed = false;
        this.capuccinoServed = false;
        this.chocolateServed = false; 


    }
    //mainteance of the coffe machine
    PlugIn() {
        this.pluggedIn = true;
    }
    connectToWater() {
        this.connectedToWater = true;
    }
    checkIfEnoughCoffeePowderForACup(amount) {
        this.PowderPerCupCoffe = 7;
    }

    checkIfEnoughCapuccinoPowderForACup(amount) {
        this.PowderPerCupCapuccino = 7;
    }

    checkIfEnoughChocolatePowderForACup(amount) {
        this.PowderPerCupChocolate = 7;
    }

    checkIfAnyCupsLeft() {
        return this.numberOfCups >= 1;
    }

    checkIfThereIsCups(amount) {

        this.numberOfCups = 2;
    }

    checkIfPayed() {
        this.insertedMoney = true;
        
    }

    insertDebitCardPayment() {

        this.insertedDebitCard = 20;
    }

    pressHotCoffeeButton() {

        this.CoffeButton = true;
    }

    receivingCoffee() {

        this.coffeeServed = true;
    }

    pressHotCapuccinoButton() {
        this.CapuccinoButton = true
        
    }
    
    receivingCapuccino() {
        this.capuccinoServed = true;

    }

    pressHotChocolateButton() {

        this.ChocolateButton = true;
    }

    receivingChocolate() {

        this.chocolateServed = true;
    }

    debitCardCoffeButton() {
        this.insertedDebitCard = 20;
    }

    debitCardCapuccinoButton() {


    }





    fillWithCoffee(amount) {
        this.amountOfCoffee = 13;
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




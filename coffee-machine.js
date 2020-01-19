//import our program
//in this case an instance of coffe machine
// so that we can run unit tests methods
//
let CoffeeMachine = require('../index.js');
let myMachine = new CoffeeMachine();
//export the step-definitions so that cucumber can read them and use them
module.exports = function () {
    this.Given(/^that the machine is plugged in$/,
        function () {
            //tell that the machine is plugged in
            myMachine.PlugIn();
            //check if the property pluggedIn is true
            //works: assert.equal (myMachine.pluggedIn, true)
            // this also works: assert(myMachine.pluggedIn)
            //but this is clearer:
            assert.strictEqual(myMachine.pluggedIn, true, 'expected the property pluggedIn to be true after calling the plugIn() method.');

        });
    this.Given(/^that water is connected$/, function () {
        //tell the machine to connect to water
        myMachine.connectToWater();

        assert.strictEqual(myMachine.connectedToWater, true, "Expected the property connectedToWater to be true after calling the connectToWater() method.");
      
    });

    this.Given(/^that the machine has coffe powder$/, function () {
        myMachine.checkIfEnoughCoffeePowderForACup();
        assert.deepEqual(myMachine.PowderPerCupCoffe, 7, "Coffe powder expected to be at least 7 grams to serve a cup of coffee");
        

    });

    this.Given(/^that the machine has capuccino powder$/, function () {
        myMachine.checkIfEnoughCapuccinoPowderForACup();

        assert.deepEqual(myMachine.PowderPerCupCapuccino, 7, "expected to at least be 7 grams of capuccino powder to serve a hot cup of capuccino");
    });

    this.Given(/^that the machine has chocolate powder$/, function () {
        myMachine.checkIfEnoughChocolatePowderForACup();

        assert.deepEqual(myMachine.PowderPerCupChocolate, 7, "Expected to at least be 7 grams of chocolate powder to serve a hot cup of chocolate");
    });

    this.Given(/^the machine has enough plastic cups$/, function () {
        myMachine.checkIfThereIsCups();

        assert.isAtLeast(myMachine.numberOfCups, 1, "expected the plastic cups to at least be 1 to serve")

    });

    this.When(/^the user inserts 20 kr$/, function () {
        myMachine.checkIfPayed();

        assert.strictEqual(myMachine.insertedMoney, true, "expected to serve choosen hot drink if 20 kr is inserted");

        
        
    });

    this.When(/^choose to press the hot coffe button$/, function () {
        myMachine.pressHotCoffeeButton();
        assert.deepEqual(myMachine.CoffeButton, true, "Expected coffee to be served if coffee button is pressed after inserting 20 kr");
    
    
    });




    this.Then(/^the user receives a hot cup of coffee$/, function () {
        myMachine.receivingCoffee();

        assert.strictEqual(myMachine.coffeeServed, true, "[expected to receive a hot cup of coffe after pressing the coffee button]");
    });

    this.When(/^choose to press the hot capuccino button$/, function () {
       
        myMachine.pressHotCapuccinoButton();

        assert.strictEqual(myMachine.CapuccinoButton, true, "[expected capuccino to be served after inserting 20 kr and pressing capuccino button]");
    });

    this.Then(/^the user receives a hot cup of capuccino$/, function () {
        myMachine.receivingCapuccino();

        assert.deepEqual(myMachine.capuccinoServed, true, "[expected to receive a hot cup of capuccino after pressing the capuccino button]");
    });

    this.When(/^choose to press the hot chocolate button$/, function () {
       
        myMachine.pressHotChocolateButton();

        assert.deepEqual(myMachine.ChocolateButton, true, "[expected hot chocolate to be served after inserting 20 kr and pressing hot chocolate button]");
    });
    this.Then(/^the user receives a hot cup of chocolate$/, function () {
        
        myMachine.receivingChocolate();

        assert.deepEqual(myMachine.chocolateServed, true, "[expected to receive a hot cup of capuccino after pressing the capuccino button]");
    });

    this.When(/^the user chooses to pay with a debit card$/, function () {
    
        myMachine.insertDebitCardPayment();

        assert.deepEqual(myMachine.insertedDebitCard, 20, "[expected to serve choosen hot drink if debitcard is accepted]");
    });
    this.When(/^press the hot coffee button$/, function () {
        myMachine.debitCardCoffeButton();

        assert.deepEqual(myMachine.insertedDebitCard, 20, "[expected to press hot coffeebutton after paying with debit card]");
    });

    this.When(/^press the hot capuccino button$/, function () {
        myMachine.debitCardCapuccinoButton();

        assert.deepEqual(myMachine.insertDebitCardPayment, 20, "[expected to press capuccino button after paying with debit card]");
    });




    

}
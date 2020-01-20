Feature: 
  as a coffe buyer i want to have a coffe machine
  that is able to brew 3 hot drinks, hot chocolate, coffee and capuccino
  when i either put 20 kr in our choose to pay with a debitcard.

  Background:    
    Given that the machine is plugged in
    And that water is connected

  Scenario: when the user chooses to pay with coins and press hotcoffeebutton
   Given that the machine has coffe powder
   And the machine has enough plastic cups
   When the user inserts 20 kr 
   And choose to press the hot coffe button
   Then the user receives a hot cup of coffee 

  Scenario: when the user chooses to pay with coins and press hotcapuccinobutton
    Given that the machine has capuccino powder
    And the machine has enough plastic cups
    When the user inserts 20 kr
    And choose to press the hot capuccino button
    Then the user receives a hot cup of capuccino

  Scenario: when the user chooses to pay with coins and press hotchocolatebutton
    Given that the machine has chocolate powder
    And the machine has enough plastic cups
    When the user inserts 20 kr
    And choose to press the hot chocolate button
    Then the user receives a hot cup of chocolate

  Scenario: when the user chooses to pay with a debit card and press hotcoffeebutton
    Given that the machine has coffe powder
    And the machine has enough plastic cups
    When the user chooses to pay with a debit card
    And press the hot coffee button
    Then the user receives a hot cup of coffee

  Scenario: when the user chooses to pay with a debit card and press hotcapuccinobutton
    Given that the machine has capuccino powder
    And the machine has enough plastic cups
    When the user chooses to pay with a debit card
    And press the hot capuccino button
    Then the user receives a hot cup of capuccino

  Scenario: when the user chooses to pay with a debit card and press hotchocolatebutton
    Given that the machine has chocolate powder
    And the machine has enough plastic cups
    When the user chooses to pay with a debit card
    And press the hot chocolate button
    Then the user receives a hot cup of chocolate

    Scenario: when the water is not connected
    Given that the machine is plugged in
    And that the water is not connected
    Then the machine shouldn't work

  Scenario: when chocolate powder is empty
    Given that the chocolate powder is empty
    When the user inserts 20 kr
    And choose to press the hot chocolate button
    Then the user doesn't receive any hot cup of chocolate
    And the user gets recommended to choose the other hot drinks available

  Scenario: when capuccino powder is empty
    Given that the capuccino powder is empty
    When the user inserts 20 kr
    And choose to press the hot capuccino button
    Then the user doesn't receive any hot cup of capuccino
    And the user gets recommended to choose the other hot drinks available

  Scenario: when coffee powder is empty
    Given that the coffee powder is empty
    When the user inserts 20 kr
    And choose to press the hot coffee button
    Then the user doesn't receive any hot cup of coffee
    And the user gets recommended to choose the other hot drinks available


    Scenario: when there isn't enough money on the card
    Given that there is enough powder to brew a hot drink
    When the user inserts an debit card with no funds in it
    Then the machine should show a display message that there is insufficient money
    And the buyer will be directed to the other pay metod
    
    Scenario: press the cancel button
    Given that there is enough powder to brew a hot drink
    When a user inserts a valid debit card with funds in it
    And press the cancel button
    Then the card wont be charged of money

    Scenario: get the money back after cancelling
    Given that there is enough powder to brew a hot drink
    And the user inserts 20 kr 
    And the user press the cancel button
    Then the user will get the money back

    Scenario: when there isnt enough beverage powder left to brew any hot drink
    Given that there isn't enough powder to brew any hot beverage
    And the user inserts 20
    Then the user gets their money back
 

    Scenario: when a user only inserts 10 kr
    Given that there is enough powder to brew  any hot drink
    And the user only inserts 10 kr
    Then the buttons wont work
    And the buyer will be asked to insert more money

    Scenario: When there isnt enough milk to serve hot chocolate and hot capuccino
    Given that there isn't enough milk
    And there is enough plastic cups
    And there is enough powder to serve a cup
    When i insert 20 kr
    Then the coffee machine wont serve any hot chocolate
    And capuccino


  Scenario Outline:
    Given that the machine is plugged in
    And that water is connected
    And that the machine has coffe powder
    And that the machine has capuccino powder
    And that the machine has chocolate powder
    And the machine has enough plastic cups
    When the user inserts a <money1> kr coin
    And the user inserts a <money2> kr coin
    And the user inserts a <money3> kr coin
    And the user inserts a <money4> kr coin
    And presses the <hotdrinks> button
    Then the user recieves <cup> cup of hot <hotdrinks>.

    Examples:
      | money1     | money2 |  money3 | money4 | cup | hotdrinks |
      | 10         | 10     |   0     |   0    |  1  | capuccino |
      | 5          | 5      |   10    |   0    |  1  | chocolate |
      | 5          | 5      |   5     |   5    |  1  | coffee    |
      | "byxknapp" | 1      |   0     |   0    |  0  |           |










  



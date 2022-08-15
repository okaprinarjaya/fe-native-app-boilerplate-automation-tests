Feature: Shopping Cart

  Scenario: Customer can go to and see the shopping cart screen

    Given home screen
    When customer navigating to the shopping cart screen
    Then they should see a screen title "Shopping cart screen" in shopping cart screen

  Scenario: Customer can add a product item to the cart

    Given the product is in stock
    And the customer's cart is empty
    When they add a product item named "V-Soy Soy Milk Cocoa" to the cart
    Then the cart should contain 1 "V-Soy Soy Milk Cocoa" product item
    And total items in the cart are 1

  Scenario: Customer can add the same product item to the cart

    Given the product is in stock
    And the customer's cart is not empty
    When they add the same product item named "V-Soy Soy Milk Cocoa" to the cart
    Then the cart should contain 2 "V-Soy Soy Milk Cocoa" product items
    And total items in the cart are 2

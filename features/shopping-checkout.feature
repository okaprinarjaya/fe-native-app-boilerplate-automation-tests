Feature: Shopping Checkout

  Scenario: customer can check out their product items added to the cart

    Given customer has added some product items to the cart
    When when they check out the product items in the shopping cart
    Then they should be taken to the check out screen
    And they can see all of their added product items with their details

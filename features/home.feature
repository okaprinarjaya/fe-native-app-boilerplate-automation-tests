Feature: Home

  Scenario: Customer can see the home screen

    Given nothing
    When customer is shown the home screen
    Then they should see a screen title "Home screen" in home screen

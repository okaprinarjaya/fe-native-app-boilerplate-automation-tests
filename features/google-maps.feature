Feature: Google Maps

  Scenario: Customer can go to and see the Google Maps screen

    Given home screen
    When customer navigating to the Google Maps screen
    Then they should see a screen title "Google Maps screen" in Google Maps screen

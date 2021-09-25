Feature: Checkout Feature

  Background:
    Given I Launch browser

  Scenario: User successfully checkout
    When I login with valid credentials
    And I sort items "lowest to highest" price
    Then I verify items are sorted "lowest to highest" successfully
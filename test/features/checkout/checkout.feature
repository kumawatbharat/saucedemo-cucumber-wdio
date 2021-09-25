Feature: Checkout Feature

  Background:
    Given I Launch browser

  Scenario: User successfully checkout
    When I login with valid credentials
    And I sort items "lowest to highest" price
    Then I verify items are sorted "lowest to highest" successfully
    When I add 2 items to cart
    And I navigate to checkout page
    Then I verify that added items are available in cart
    When I remove all added items from cart
    And I continue on shopping
    When I add 1 items to cart
    And I navigate to checkout page
    Then I verify that added items are available in cart
    And I finish checkout

Feature: Go to the home
  Display the title

  Scenario: Home Page
    Given I am on the home page
    When I do nothing
    Then I should see the title
    And The title has changed by JS Code

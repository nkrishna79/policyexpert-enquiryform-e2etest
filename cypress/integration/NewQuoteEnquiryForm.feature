Feature: As a new user
  I would like to get some quotes from policy expert
  so that I can make an informed decision

  Scenario: Get Quotes
    Given I access policyexperts enquiry form
    When I submit the details section of the form
    Then I should be taken to quotes section


@getquotes
Feature: Policy Expert Enquiry Form
  I would like to get some quotes from policy expert
  so that I can make an informed decision

  Background:
    Given I access policyexperts enquiry form

  @getquotes
  Scenario Outline: Get Quotes
    When I submit the details section to get a quote for "<TypeOfHomeInsurancedneeded>"
    Then I should be taken to quotes section

    Examples:
      | TypeOfHomeInsurancedneeded |
      | Buildings only             |


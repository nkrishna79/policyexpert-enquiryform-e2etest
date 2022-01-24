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

  @helperMenu
  Scenario: Verify helper popup
    When I click on the help menu
    Then I should see a help message

  @checkfieldvalidation
  Scenario: Verify field validations
    When I miss to enter data in the field
    Then I should see the field validation message
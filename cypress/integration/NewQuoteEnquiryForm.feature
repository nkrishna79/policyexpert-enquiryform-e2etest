Feature: Policy Expert Enquiry Form
  I would like to get some quotes from policy expert
  so that I can make an informed decision

  Scenario Outline: Get Quotes
    Given I access policyexperts enquiry form
    When I submit the details section to get a quote for "<TypeOfHomeInsurancedneeded>"
    Then I should be taken to quotes section

    Examples:
      | TypeOfHomeInsurancedneeded |
      | Buildings only             |
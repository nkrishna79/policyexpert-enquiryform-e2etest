const {Before, Given, When, Then} = require("cypress-cucumber-preprocessor/steps");
import Aboutyousection from '../aboutyousection';

Before(() => {
    cy.visit("/home");
});
Given("I access policyexperts enquiry form", () => {
    Aboutyousection.verifyElementVisible('#logo-default').should('be.visible');
});
When("I submit the details section of the form", () => {
    Aboutyousection.completeAboutyouSection();
});
Then("I should be taken to quotes section", () => {

});
//cy.get(':nth-child(1) > [data-testid="questions"] > :nth-child(1) > .row > .col-xs-10 > .questionset-input > .form-control')

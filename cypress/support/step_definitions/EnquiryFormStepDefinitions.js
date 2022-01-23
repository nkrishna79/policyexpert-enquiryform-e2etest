const {Before, Given, When, Then} = require("cypress-cucumber-preprocessor/steps");
import Enquiryformhelper from '../enquiryformhelper';

Before(() => {
    cy.visit("/home");
    cy.clearLocalStorage();
});
Given("I access policyexperts enquiry form", () => {
    Enquiryformhelper.verifyElementVisible('#logo-default').should('be.visible');
});
When("I submit the details section of the form", () => {
    Enquiryformhelper.completeAboutyouSection();
    Enquiryformhelper.completeAboutAndOtherResidentsSection();
    Enquiryformhelper.completeAboutYourPropertySection();
});
Then("I should be taken to quotes section", () => {

});
//cy.get(':nth-child(1) > [data-testid="questions"] > :nth-child(1) > .row > .col-xs-10 > .questionset-input > .form-control')

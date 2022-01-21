const {Before, Given, When, Then} = require("cypress-cucumber-preprocessor/steps");
const {Chance} = require("chance");
const chance = new Chance();

Before(() => {
    cy.visit("/home");
});
Given("I access policyexperts enquiry form", () => {
    cy.get('#logo-default').should('be.visible');
});
When("I submit the details section of the form", () => {
    cy.get('[data-di-id="di-id-f0e5ef83-5894a860"]').select('Mr');
    let firstname = chance.first({nationality: 'en'});
    let lastname = chance.last({nationality: 'en'});
    cy.get('[data-testid="question"]').eq(1).type(firstname);
    cy.get('[data-testid="question"]').eq(2).type(lastname);
    cy.get('[data-di-id="di-id-f5140814-d1fc937c"]').select('25');
    cy.get('[data-di-id="di-id-11487cee-aa246c0b"]').select('12');
    cy.get('[data-di-id="di-id-a6ef246b-f6fa0cff"]').select('1975');
});
Then("I should be taken to quotes section", () => {

});
//cy.get(':nth-child(1) > [data-testid="questions"] > :nth-child(1) > .row > .col-xs-10 > .questionset-input > .form-control')

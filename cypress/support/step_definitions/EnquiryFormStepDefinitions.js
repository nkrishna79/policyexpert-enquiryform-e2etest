const {Before, Given, When, Then} = require("cypress-cucumber-preprocessor/steps");
import Enquiryformhelper from '../enquiryformhelper';

Before(() => {
    cy.visit("/home").wait(5000);
});
Given(/^I access policyexperts enquiry form$/, function () {
    Enquiryformhelper.verifyElementVisible('#logo-default').should('be.visible');
});
When(/^I submit the details section to get a quote for "([^"]*)"$/, (typeOfInsurance) => {
    Enquiryformhelper.completeAboutyouSection();
    Enquiryformhelper.completeAboutAndOtherResidentsSection();
    Enquiryformhelper.completeAboutYourPropertySection();
    Enquiryformhelper.completeQuestionsAboutProperty();
    Enquiryformhelper.completeAboutSafetyAndSecurity();
    Enquiryformhelper.completeAboutJointPolicyHolders();
    Enquiryformhelper.completeAboutYourInsuranceHistory();
    Enquiryformhelper.completeAboutTheCoverYouWant(typeOfInsurance);
});
Then(/^I should be taken to quotes section$/, function () {
    Enquiryformhelper.verifyUserRedirectedToQuotes();
});
When(/^I click on the help menu$/, function () {
    Enquiryformhelper.clickFieldHelperMenu();
});
Then(/^I should see a help message$/, function () {
    Enquiryformhelper.clickFieldHelperMenuAndVerify();
});
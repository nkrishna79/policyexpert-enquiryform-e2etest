const {Chance} = require("chance");
const chance = new Chance();

class Enquiryformhelper {
    constructor() {
    }

    static verifyElementVisible(selector) {
        return cy.get(selector);
    }

    static selectDropDownByText(selector, byText) {
        return cy.get(selector).select(byText);
    }

    static selectSimilarDropDownByText(index, byText) {
        cy.get('[data-di-id="di-id-a0153183-959eb14e"]').eq(index).select(byText);
    }

    static enterTextInField(index) {
        return cy.get('[data-testid="question"]').eq(index);
    }

    static enterTextInLookUp() {
        return cy.get('[data-testid="lookup"]');
    }

    static randomDateSelector(date, month, year) {
        cy.get('[data-di-id="di-id-f5140814-d1fc937c"]').select(date).wait(1000);
        cy.get('[data-di-id="di-id-11487cee-aa246c0b"]').select(month).wait(1000);
        cy.get('[data-di-id="di-id-a6ef246b-f6fa0cff"]').select(year).wait(1000);
    }

    static selectFirstOptionFromLookup() {
        cy.get('.list-group > :nth-child(1)').click({force: true}).wait(1000);
    }

    static clickNoInYesNoToggleWithIndex() {
        return cy.get('[data-di-id="di-id-dca0999-28e2fef6"]');
    }

    static clickYesInYesNoToggleWithIndex() {
        return cy.get('[data-di-id="di-id-60b22eac-13b6ff99"]');
    }

    static enterMobileNumber(index) {
        cy.get('[data-testid="question"]').eq(index);
    }

    static enterEmailAddress(index) {
        cy.get('[data-testid="question"]').eq(index);
    }

    static enterPropertyBuiltYear() {
        return cy.get('div[class=\'row question-row-approximately-in-whi\'] input[type=\'text\']');
    }

    static clickButton(selector) {
        return cy.get(selector);
    }

    static completeAboutyouSection() {
        this.selectDropDownByText('[data-di-id="di-id-f0e5ef83-5894a860"]', 'Mr');
        let firstname = chance.first({nationality: 'en'});
        let lastname = chance.last({nationality: 'en'});
        this.enterTextInField(1).type(firstname);
        this.enterTextInField(2).type(lastname);
        this.randomDateSelector(25, 12, 75);
        this.selectDropDownByText('[data-di-id="di-id-f1e92140-397a5948"]', 'Married');
        this.enterTextInLookUp().eq(0).type('Manager');
        this.selectFirstOptionFromLookup();
        this.clickNoInYesNoToggleWithIndex().eq(0).click();
        this.enterTextInField(7).type('07565656778');
        this.enterTextInField(8).type('vketipisz@qmetric.co.uk');
    }

    static completeAboutAndOtherResidentsSection() {
        this.clickNoInYesNoToggleWithIndex().eq(1).click()
    }

    static completeAboutYourPropertySection() {
        this.enterTextInLookUp().eq(1).type('EC2N 4AY').wait(3000);
        this.selectFirstOptionFromLookup();
        this.selectFirstOptionFromLookup();
        this.clickYesInYesNoToggleWithIndex().eq(2).click();
        this.selectDropDownByText('[data-di-id="di-id-ca971917-620638c0"]', 'House');
        this.selectDropDownByText('[data-di-id="di-id-f1e92140-6f2165df"]', 'Detached house');
        this.enterPropertyBuiltYear().type('1980');
        this.selectDropDownByText('[data-di-id="di-id-922d0104-410966e4"]', '2');
        this.selectSimilarDropDownByText(0, '2');
        this.clickYesInYesNoToggleWithIndex().eq(3).click();
        this.selectDropDownByText('[data-di-id="di-id-b10d3963-744e7e4a"]', 'Yes, I own the property, with a mortgage');
        this.selectDropDownByText('[data-di-id="di-id-48df2e2e-a1e2e62e"]', 'You and your family');
        this.selectSimilarDropDownByText(1, '2');
        this.selectSimilarDropDownByText(2, '2');
        this.clickNoInYesNoToggleWithIndex().eq(4).click();
        this.selectDropDownByText('[data-di-id="di-id-bd105317-9f628c38"]', 'Both day and night');
        this.clickNoInYesNoToggleWithIndex().eq(5).click();
        this.clickNoInYesNoToggleWithIndex().eq(6).click();
        this.clickYesInYesNoToggleWithIndex().eq(7).click();
        this.clickYesInYesNoToggleWithIndex().eq(8).click();
        this.clickYesInYesNoToggleWithIndex().eq(9).click();
    }

    static completeQuestionsAboutProperty() {
        this.clickNoInYesNoToggleWithIndex().eq(10).click();
    }

    static completeAboutSafetyAndSecurity() {
        for (let j = 11; j <= 15; j++) {
            this.clickNoInYesNoToggleWithIndex().eq(j).click();
        }
    }

    static completeAboutJointPolicyHolders() {
        this.clickNoInYesNoToggleWithIndex().eq(16).click();
    }

    static completeAboutYourInsuranceHistory() {
        this.selectDropDownByText('[data-di-id="di-id-4225a61d-746337f5"]', '5 years');
        this.clickNoInYesNoToggleWithIndex().eq(17).click();
    }

    static completeAboutTheCoverYouWant(typeOfInsurance) {
        this.clickButton('[data-di-id="di-id-922d0104-5fb4c3c"]').click().wait(1000);
        this.selectDropDownByText('[data-di-id="di-id-75bb769d-392c2bf8"]', typeOfInsurance).wait(1000);
        cy.get('.question-currency > .row > .col-xs-10 > .questionset-input > .form-control').type('450000');
        this.clickNoInYesNoToggleWithIndex().eq(18).click().wait(1000);
        this.clickButton('[data-di-id="di-id-8afc63a7-78afb62d"]').click().wait(5000);
    }

    static verifyUserRedirectedToQuotes() {
        cy.url().should('contain', 'summary');
    }
}


export default Enquiryformhelper;
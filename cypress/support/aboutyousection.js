const {Chance} = require("chance");
const chance = new Chance();

class Aboutyousection {
    constructor() {
    }

    static verifyElementVisible(selector) {
        return cy.get(selector);
    }

    static selectDropDownByText(selector, byText) {
        cy.get(selector).select(byText);
    }

    static enterTextInField(index) {
        return cy.get('[data-testid="question"]').eq(index);
    }

    static enterTextInLookUp(){
        return cy.get('[data-testid="lookup"]');
    }

    static randomDateSelector(date, month, year) {
        cy.get('[data-di-id="di-id-f5140814-d1fc937c"]').select(date).wait(1000);
        cy.get('[data-di-id="di-id-11487cee-aa246c0b"]').select(month).wait(1000);
        cy.get('[data-di-id="di-id-a6ef246b-f6fa0cff"]').select(year).wait(1000);
    }

    static selectOccupationFromDropDown() {
        cy.get('.list-group > :nth-child(1)').click();
    }

    static clickWithIndex(selector) {
        cy.get(selector).eq(0).click();
    }

    static enterMobileNumber(index, phoneNumber) {
        cy.get('[data-testid="question"]').eq(index).type(phoneNumber);
    }

    static enterEmailAddress(index, phoneNumber) {
        cy.get('[data-testid="question"]').eq(index).type(phoneNumber);
    }

    static completeAboutyouSection() {
        this.selectDropDownByText('[data-di-id="di-id-f0e5ef83-5894a860"]', 'Mr');
        let firstname = chance.first({nationality: 'en'});
        let lastname = chance.last({nationality: 'en'});
        this.enterTextInField(1).type(firstname);
        this.enterTextInField(2).type(lastname);
        this.randomDateSelector(25, 12, 75);
        this.selectDropDownByText('[data-di-id="di-id-f1e92140-397a5948"]', 'Married');
        this.enterTextInLookUp().eq(1).type('Manager');
        this.selectOccupationFromDropDown();
        this.clickWithIndex('[data-di-id="di-id-dca0999-28e2fef6"]');
        this.enterTextInField(7).type( '07565656778');
        this.enterTextInField(8).type( 'vketipisz@qmetric.co.uk');
    }
}


export default Aboutyousection;
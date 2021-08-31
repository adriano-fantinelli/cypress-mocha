/// <reference types="Cypress" />

const el = require('./elements').ELEMENTS

class LoginPage {

    login(email, password) {
        cy.get(el.inputEmail).type(email)
        cy.get(el.inputPassword).type(password)
        cy.get(el.buttonSubmitLogin).click()
    }

}
export default new LoginPage();

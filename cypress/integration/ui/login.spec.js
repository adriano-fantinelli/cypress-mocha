/// <reference types="cypress" />
import LoginPage from "../../support/pages/login";

context('Login', () => {
    let dataLogin
    beforeEach(() => {
        cy.fixture('login.json').then( d => {
            dataLogin = d
        })
        cy.visit("/")
    })

    it('Must login successfully', () => {
        LoginPage.login(dataLogin.loginSuccess.email, dataLogin.loginSuccess.password)
        cy.get('.account > span').should('have.text', 'Automação Teste')
    })

    it('Must login without success and with an incorrect email', () => {
        LoginPage.login(dataLogin.loginWithoutSuccessInvalidEmail.email, dataLogin.loginWithoutSuccessInvalidEmail.password)
        cy.get('ol > li').should('have.text', 'Authentication failed.')
    })

    it('Must login without sucess and with an incorrect password', () => {
        LoginPage.login(dataLogin.loginWithoutSuccessInvalidPassword.email, dataLogin.loginWithoutSuccessInvalidPassword.password)
        cy.get('ol > li').should('have.text', 'Authentication failed.')
    })

})

/// <reference types="cypress" />
import LoginPage from "../../support/pages/login"

context('Fazer login', () => {

    beforeEach(() => {
        cy.visit("/")
    })

    it('Deve realizar um login com sucesso', () => {
        LoginPage.preencherLogin("novoemailteste@gmail.com", "teste123")
        cy.get('.account > span').should('have.text', 'Automação Teste')
    })

})
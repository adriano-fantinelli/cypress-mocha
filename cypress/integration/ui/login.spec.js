/// <reference types="cypress" />
import LoginPage from "../../support/pages/login";

// Traduzir para o inglês
context('Fazer login', () => {
    let dadosLogin
    beforeEach(() => {
        cy.fixture('login.json').then( d => {
            dadosLogin = d
        })
        cy.visit("/")
    })

    it('Deve realizar um login com sucesso', () => {
        LoginPage.preencherLogin(dadosLogin.loginSucesso.email, dadosLogin.loginSucesso.senha)
        cy.get('.account > span').should('have.text', 'Automação Teste')
    })

    it('Deve realizar um login sem sucesso com um email inválido', () => {
        LoginPage.preencherLogin(dadosLogin.loginSemSucessoEmailInvalido.email, dadosLogin.loginSemSucessoEmailInvalido.senha)
        cy.get('ol > li').should('have.text', 'Authentication failed.')
    })

    it('Deve realizar um login sem sucesso com um email valido', () => {
        LoginPage.preencherLogin(dadosLogin.loginSemSucessoSenhaInvalida.email, dadosLogin.loginSemSucessoSenhaInvalida.senha)
        cy.get('ol > li').should('have.text', 'Authentication failed.')
    })

})
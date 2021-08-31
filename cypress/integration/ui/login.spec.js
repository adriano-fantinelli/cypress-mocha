/// <reference types="cypress" />
import LoginPage from "../../support/pages/Login"

context('Login', { tags: ['@regression', '@login'] }, () => {
  beforeEach(() => {
    cy.fixture('login').as('login')
    cy.visit("/")
  })

  it('Must login successfully', { tags: ['@smoke'] }, function () {
    LoginPage.login(this.login.loginSuccess.email, this.login.loginSuccess.password)
    cy.get('.account > span').should('have.text', 'Novo email')
  })

  it('Must login without success and with an incorrect email', function () {
    LoginPage.login(this.login.loginWithoutSuccessInvalidEmail.email, this.login.loginWithoutSuccessInvalidEmail.password)
    cy.get('ol > li').should('have.text', 'Authentication failed.')
  })

  it('Must login without sucess and with an incorrect password', function () {
    LoginPage.login(this.login.loginWithoutSuccessInvalidPassword.email, this.login.loginWithoutSuccessInvalidPassword.password)
    cy.get('ol > li').should('have.text', 'Authentication failed.')
  })
})

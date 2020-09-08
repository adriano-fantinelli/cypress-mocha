class LoginPage{
    preencherLogin(email, senha){
        cy.get('#email').type(email)
        cy.get('#passwd').type(senha)
        cy.get('#SubmitLogin > span').click()
    }
}
export default new LoginPage();
class LoginPage{
    
    login(email, password){
        cy.get('#email').type(email)
        cy.get('#passwd').type(password)
        cy.get('#SubmitLogin > span').click()
    }

}
export default new LoginPage();

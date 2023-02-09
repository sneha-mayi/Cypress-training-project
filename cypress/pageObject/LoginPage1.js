 class LoginPage1
{
    userName= 'input[name="userName"]';
    password='input[name="password]';
    login='submit';
    successMessage = 'h3[normalize-space()="Login Successfully"]';

    login(userName,password){
        cy.get(userName).type(userName);
        cy.get(password).type(password);
        cy.contains(login).click();
    }
    
    verifyLogin(){

        this.login();
        cy.get(successMessage).should('be.visible')
    }
}
export default LoginPage1



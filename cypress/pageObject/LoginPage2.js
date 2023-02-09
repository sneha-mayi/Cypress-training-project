class LoginPage2
{
    getUsername()
    {
        return cy.get('input[name="userName"]')

    }
    getPassword()
    {
        return cy.get('input[name="password"]')

    }
    getClick()
    {
       return cy.get('input[name="submit"]')
    }
}
export default LoginPage2;
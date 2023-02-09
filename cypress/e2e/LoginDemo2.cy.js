///<reference types="cypress"/>

import LoginPage2 from "../pageObject/LoginPage2";
import { HomePage } from "../pageObject/HomePage";

describe('login Testsuite',function()
{
    
    before(function() 
    {
        cy.fixture('LoginTestdata').then( function(data) {
            this.data=data
            // userName=testData.userName
            // cy.log("userName: " +userName )
            // password=testData.password
            // cy.log("Password: " +password ) 
        })
    })

it('loginTestcase',function() {
    const loginpage2=new LoginPage2()
    cy.visit('https://www.demo.guru99.com/test/newtours/index.php')
    loginpage2.getUsername().type(this.data.userName)
    
    loginpage2.getPassword().type(this.data.password)
    loginpage2.getClick().click()
    

const homePage = new HomePage()
homePage.getWelcomeMessaage().should('have.text','Login Successfully')

})

})





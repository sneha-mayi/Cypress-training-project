
///<reference types="cypress"/>
import { LoginPage1 } from "../pageObject/loginPage1";


describe('Read the data from json', () => {
    var userName;
    var password;
    var login;
    
    beforeEach(function () 
    
    {
       cy.visit('https://www.demo.guru99.com/test/newtours/index.php')
       cy.fixture('LoginTestdata').then((testData) => {
            userName=testData.userName
            cy.log("userName: " +userName )
            password=testData.password
            cy.log("Password: " +password )
            

        })
    })
        

        it('loginPage' ,() => {

            const loginPage1=new LoginPage1()
            
            
            loginPage1.login(userName,password)

            
        })

      

    })
    /*it('verifylogin', () => {
        cy.get('input[name="userName"]').type(userName)
        cy.get('input[name="password"]').type(password)
        cy.get('input[name="submit"]').click()
    })*/

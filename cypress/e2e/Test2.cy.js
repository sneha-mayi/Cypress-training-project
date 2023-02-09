///<reference types="cypress"/>
describe('My first Test suite',function()
{
it('Myfirst Testcase',function()
{
cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
cy.get('.search-keyword').type('ca')
cy.get('.product').should('have.length',5)
cy.get('.product:visible').should('have.length',4)
cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
}



)


})








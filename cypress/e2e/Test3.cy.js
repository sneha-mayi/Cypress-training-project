
///<reference types="cypress"/>



describe('Test suite',function(){

it('Tesstcase',function()
    {
        cy.visit("https://demoqa.com/")
        cy.fixture('Test3Data').then( function(data) {
            this.data=data
            console.log(data)
        
        cy.get(':nth-child(1) > :nth-child(1) > .card-body').click()
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-0 > .text').click()
        cy.get('#userName').type(this.data.Fullname)
        cy.get('#userEmail').type(this.data.Email)
        cy.get('#currentAddress').type(this.data.CurrentAddress)
        cy.get('#permanentAddress').type(this.data.PermanentAddress)
        
    })
    })
})


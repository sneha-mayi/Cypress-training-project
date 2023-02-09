///<reference types="cypress"/>

describe('test suite',function(){
    it('Testcase',function(){
        cy.visit("https://demoqa.com/")
        cy.get(':nth-child(1) > :nth-child(1) > .card-body').click()
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-1').click()
        cy.get('.rct-icon.rct-icon-expand-close').click()
        cy.get('rct-title')

    }
    )
})



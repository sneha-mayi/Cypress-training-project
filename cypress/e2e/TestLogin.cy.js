describe("Test suite",()=>
{
    before(function(){
        cy.log("before method")
    })
    after(function(){
        cy.log("after method")
    })
    beforeEach(function(){
        cy.log("Before Each")
    })
    afterEach(function(){
        cy.log("after Each")
    })
    it("Searching",()=>{
        cy.log("searching a product")
    
    })

    it("Advance search",()=>{
        cy.log("searching with advanced search")
    
    })
    it("Verify product List products",()=>{
        cy.log("Productlist")
    
    })
})
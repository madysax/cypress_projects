describe("Inspect Automation Test Store items using chain of commands", () =>{
    it("Should be able to select first item using item text", () =>{
        cy.visit("https://www.automationteststore.com/");
        cy.url().should('include', 'store')
        //cy.get('a[title="Skinsheen Bronzer Stick"]').click()
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click()
        cy.get('.bgnone').should('have.text', 'Skinsheen Bronzer Stick')
    })
    it.only("Should be able to select first item using item index", () =>{
        cy.visit("https://www.automationteststore.com/");
        cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click()
        //print the text
        cy.log("Testing")
    })
})
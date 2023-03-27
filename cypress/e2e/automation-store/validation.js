describe("describe all the assertion", () =>{
    it("Validate link", () =>{
        cy.visit("https://automationteststore.com/")
        //validate the url
        cy.url().should('include', 'store')
        //validate and display the makeup link
        cy.get('a[href*="product/category&path="]').contains('Makeup').click().then(function(makeUpLink){
            cy.log("Display the makeup link: ", makeUpLink.text() )

        })
        //validate the text
        cy.get('[style="margin-bottom: 15px;"] > p').should('contain', 'All your makeup needs, from foundation to eye shadow in hundreds of different assortments and colors.')
    })
})
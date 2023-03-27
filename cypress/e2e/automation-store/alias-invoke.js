//https://docs.cypress.io/guides/core-concepts/variables-and-aliases#Aliases
//https://docs.cypress.io/api/commands/invoke#Syntax

//Alias use them to share objects between your hooks and your tests.
describe("Alias and invoke", () =>{
  it("Validate a specific hair care product", () =>{
    cy.visit("https://automationteststore.com/")
    cy.get('a[href*="=product/category&path="]').contains('Hair Care').click()
    cy.get('.fixed .prdocutname').eq(0).invoke('text').as('productThumbnail')
    cy.get('@productThumbnail').its('length').should('be.gt', 5)
    cy.get('@productThumbnail').should('include','Seaweed Conditioner')

  })

  it.only ("Validate the products on the home page and product has a cart", () =>{
    cy.visit("https://automationteststore.com/")
    cy.get('.thumbnail').as('productThumbnail')
    cy.get('@productThumbnail').its('length')
    cy.get('@productThumbnail').should('have.length', 16)
    cy.get('@productThumbnail').find('.productcart').invoke('attr','title').should('include', 'Add to Cart')

  })

})
describe("Validate element displayed",()=>{
  beforeEach(() =>{
    cy.visit("https://www.letskodeit.com/practice")
  })

  it("User can click on show button and text",() =>{
    cy.get("#show-textbox").click();
    cy.get("#displayed-text").type("Displaying the element");
    cy.get("#hide-textbox").click();
    cy.get("#displayed-text").invoke("show")
    cy.get("#displayed-text").then(function(text1){
      cy.log(text1.text())

    })
  })
})
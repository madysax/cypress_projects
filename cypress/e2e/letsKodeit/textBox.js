describe("Validate text box",() =>{
  beforeEach(() => {
    cy.visit("https://www.letskodeit.com/practice")
  });
  it("verify the text is empty", () =>{
    cy.get("#autosuggest").should("be.empty");
  });
  it("User should be able to enter text", () =>{
    cy.get("#autosuggest").type("Let's kodeit")
  });
  
})
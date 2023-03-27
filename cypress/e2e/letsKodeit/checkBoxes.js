//import *as data from "../../fixtures/letsKodeit.json";

describe("Verify login page and practice page",() => {

  before(function()
  {
    cy.logintocodeit();
  })
  beforeEach(function (){
    cy.visit("https://www.letskodeit.com/practice");
  })
  
  it("Verify checkboxes are unchecked and later user can check all boxes",() =>{
    cy.get("#bmwcheck").should("not.be.checked");
    cy.get("#benzcheck").should("not.be.checked");
    cy.get("#hondacheck").should("not.be.checked")
    cy.get("#bmwcheck").click();
    cy.get("#benzcheck").click()
    cy.get("#hondacheck").click()
    cy.get("#bmwcheck").should("be.checked");
    cy.get("#benzcheck").should("be.checked");
    cy.get("#hondacheck").should("be.checked")

  })
  
})


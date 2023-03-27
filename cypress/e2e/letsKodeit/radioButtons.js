import data from "../../fixtures/letsKodeit.json";
import login from "../../support/login.js";
describe("Verify login page and practice page",() => {
  before(function()
  {
    cy.fixture('letsKodeit').then(function (data){
      globalThis.data = data;
     

    cy.visit("https://www.letskodeit.com/login");
    cy.get("#email").type(data.username);
    cy.get("#login-password").type(data.password);
    cy.get("#login").click();
    cy.xpath("//div[@class='col-md-12']").contains("My Courses").should("have.text","My Courses ")
    cy.xpath("//a[@href='/practice']").invoke('removeAttr', 'Target').click()
  })
  })
  beforeEach(function (){
    cy.visit("https://www.letskodeit.com/practice");
  })

  it("Verfy radio buttons are not checked and Honda can be checked", ()  =>{
   cy.get("#bmwradio").should("not.be.checked");
   cy.get("#hondaradio").click().should("be.checked");
  })
/*
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
 */ 
})


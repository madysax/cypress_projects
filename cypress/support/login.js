/*import *as data from "../../fixtures/letsKodeit.json";

  function logintocodeit()
  {
    cy.visit("https://www.letskodeit.com/login");
    cy.get("#email").type(data.username);
    cy.get("#login-password").type(data.password);
    cy.get("#login").click();
    cy.xpath("//div[@class='col-md-12']").contains("My Courses").should("have.text","My Courses ")
    cy.xpath("//a[@href='/practice']").invoke('removeAttr', 'Target').click()
 
  }*/

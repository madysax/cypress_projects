// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
import *as data from "../fixtures/letsKodeit.json";
import loginPage from "./POM/loginPage";

Cypress.Commands.add("logintocodeit", () =>
  {
    const loginobj = new loginPage();
    loginobj.launch();
    //cy.visit("https://www.letskodeit.com/login");
    cy.get("#email").type(data.username);
    cy.get("#login-password").type(data.password);
    cy.get("#login").click();
    cy.xpath("//div[@class='col-md-12']").contains("My Courses").should("have.text","My Courses ")
    cy.xpath("//a[@href='/practice']").invoke('removeAttr', 'Target').click()
 
  })

//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
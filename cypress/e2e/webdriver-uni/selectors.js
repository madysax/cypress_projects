describe("selectors", () =>{
    it("Example of selectors", () =>{
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html');


        // By tag name
        cy.get('input')
        // By attribute name and value
        cy.get('input[name="first_name"]')
        //By xpath
        cy.xpath('//input[@name="first_name"]')
        //By class
        cy.get(".feedback-input")
        // By id
        cy.get('#contact_me')
        // By multiple classes
        cy.get('nav[class="navbar navbar-inverse navbar-fixed-top"]')
        // By multiple attributes name and value
        cy.get('[name="first_name"][placeholder="First Name"]')

    })

/*
    //run from command line
    1. headless mode---
    npx cypress run
    2.headed mode---(automatically run in the electron browser)
    npx cypress run --headed
    3. run in the chrome browser---
    npx cypress run --browser chrome
   4.  run one script only---
    npx cypress run --spec cypress/e2e/automation-store/contact-us.js
*/
})
/// <reference types="cypress" />
// <reference types="cypress-xpath" />


describe("contact us page", () => {

    it("User should be able to contact  us successfully", () =>{
        cy.visit("https://www.automationteststore.com/");
        //css selector
         // promice (handle order of execution for non cypress commands like console.log and .text is jqery command)
        cy.get("a[href$='contact']").click().then(function(linkText){
            cy.log("Clicked on link using text: "+linkText.text())

        })
        //assertion
        cy.get("a[href$='contact']").should('be.visible')
        cy.get('#ContactUsFrm_first_name').type("Joe")
        cy.get('#ContactUsFrm_first_name').should('have.attr', 'name', 'first_name')
        cy.get('#ContactUsFrm_email').type("Joe@email.com");
        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email')
        cy.get('#ContactUsFrm_enquiry').type("I want to test this")
        //xpath
        cy.xpath("//button[@title='Submit']").click()
        cy.get('.mb40 > p:nth-of-type(2)').then(function(displayText){
            cy.log("Capture the display text: "+displayText.text())
        })
        cy.get('.mb40 > p:nth-of-type(2)').should('have.text','Your enquiry has been successfully sent to the store owner!')
        
    });
    
    
})
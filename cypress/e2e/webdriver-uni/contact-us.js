

describe('Verify contact us', () =>{
    it.only('User should be able to contact us successfully', () =>{
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html');
        //Validation for document 
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        //Assertion for title
        cy.title().should('include', 'WebDriver | Contact Us')
        //Assertion given URL
        cy.url().should('include', 'contactus')
        cy.xpath("//input[@name='first_name']").type("Joe");
        cy.xpath("//input[@name='last_name']").type("Tester");
        cy.xpath("//input[@name='email']").type("Joe@email.com");
        cy.xpath("//textarea[@name='message']").type("Testing");
        cy.get('input[type="submit"]').click();
        cy.get('h1').should('have.text', 'Thank You for your Message!')

    })
    it('User should not be able to submit contact us without filling all the required fields', () =>{
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html');
        cy.xpath("//input[@name='first_name']").type("Joe");
        cy.xpath("//input[@name='last_name']").type("Tester");
        cy.xpath("//textarea[@name='message']").type("Testing");
        cy.get('input[type="submit"]').click();
        cy.get('body').contains('Error: all fields are required')

    })
})
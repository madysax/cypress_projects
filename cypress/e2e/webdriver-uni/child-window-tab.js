describe('Verify contact us', () => {
  it('User should be able to contact us successfully', () => {
// open in the same tab
    cy.visit('http://www.webdriveruniversity.com')
    cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true});

    cy.xpath("//input[@name='first_name']").type("Joe");
    cy.xpath("//input[@name='last_name']").type("Tester");
    cy.xpath("//input[@name='email']").type("Joe@email.com");
    cy.xpath("//textarea[@name='message']").type("Testing");
    cy.get('input[type="submit"]').click();
    cy.get('h1').should('have.text', 'Thank You for your Message!')

  })
})
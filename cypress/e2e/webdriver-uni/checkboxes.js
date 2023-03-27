//https://docs.cypress.io/api/commands/check#Syntax
describe('Validate checkoxes', () => {
  it('Validate select first checkbox', () => {
    cy.visit('http://www.webdriveruniversity.com/')
    cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()
    cy.get('input[type="checkbox"]').as('checkbox')
    cy.get('@checkbox').first().should('not.be.checked')
    cy.get('@checkbox').first().check().should('be.checked')
  });

  it('Validate unselect 3rd check box', () => {
    cy.visit('http://www.webdriveruniversity.com/')
    cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()
    cy.get('input[type="checkbox"]').as('checkbox')
    cy.get('@checkbox').uncheck(['option-3']).should('not.be.checked')
  });

  it('Validate select all checkboxes', () => {
    cy.visit('http://www.webdriveruniversity.com/')
    cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()
    cy.get('input[type="checkbox"]').as('checkbox')
    cy.get('@checkbox').check(["option-1", "option-2", "option-3", "option-4"]).should('be.checked')
  
  });

});
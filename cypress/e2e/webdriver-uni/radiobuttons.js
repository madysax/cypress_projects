describe('Validate all radio buttons', () => {

  it('Checked first radio button', () => {
    cy.visit('http://www.webdriveruniversity.com/')
    cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()
    cy.get('#radio-buttons').find('[type="radio"]').first().check().should('be.checked')
  });

  it('Checked second radio button', () => {
    cy.visit('http://www.webdriveruniversity.com/')
    cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()
    cy.get('#radio-buttons').find('[type="radio"]').eq(1).check().should('be.checked')
  });

  it('Checked specific radio buttons ', () => {
    cy.visit('http://www.webdriveruniversity.com/')
    cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()
    cy.get('#radio-buttons').find('[type="radio"]').check(["green", "blue", "yellow", "orange", "purple"])
  });

  it('Validate the states of specific radio buttons ', () => {
    cy.visit('http://www.webdriveruniversity.com/')
    cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()
    cy.get('input[value="lettuce"]').should('not.be.checked')
    cy.get('[value="cabbage"]').should('not.be.checked')
    cy.get('input[value="pumpkin"]').should('be.checked')

  });

  it('Checked the lettuce radio button and Validate pumkin radio buttons is unchecked ', () => {
    cy.visit('http://www.webdriveruniversity.com/')
    cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()
    cy.get('input[value="lettuce"]').check().should('be.checked')
    cy.get('input[value="pumpkin"]').should('not.be.checked')
  });

  it('Validate Cabbage radio buttons is disable ', () => {
    cy.visit('http://www.webdriveruniversity.com/')
    cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()
    cy.get('input[value="cabbage"]').should('be.disabled')
  });

});
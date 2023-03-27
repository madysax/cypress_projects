//https://docs.cypress.io/api/events/catalog-of-events#Event-Types
//https://docs.cypress.io/api/commands/stub#Syntax

describe("validate alerts on the pop-up and alert page", () => {
  it('Validate alert', () => {
    cy.visit('http://www.webdriveruniversity.com/')
    cy.get('#popup-alerts').invoke('removeAttr', 'target').click()
    cy.url().should('include', 'Popup-Alerts')
    cy.get('#button1').click()

    //cypress handle alerts automatically but if we want assert then we use event
    cy.on('window:alert', (str) => {
      expect(str).to.equal('I am an alert box!')

    })
  })

  it('Validate conform box if press the OK', () => {
    cy.visit('http://www.webdriveruniversity.com/')
    cy.get('#popup-alerts').invoke('removeAttr', 'target').click()
    cy.url().should('include', 'Popup-Alerts')
    //cypress handle alerts automatically but if we want assert then we use event
    cy.get('#button4').click()
    cy.on('window:confirm', (str) =>{
      return true;

    })
    cy.get('#confirm-alert-text').should('have.text', 'You pressed OK!')
  })
  

  it('Validate conform box if press the cancel button', () => {
    cy.visit('http://www.webdriveruniversity.com/')
    cy.get('#popup-alerts').invoke('removeAttr', 'target').click()
    cy.url().should('include', 'Popup-Alerts')
    //cypress handle alerts automatically but if we want assert then we use event
     cy.get('#button4').click()
    // window confirm has ability to cancel the cancel alert
    cy.on('window:confirm', (str) =>{
      return false;
    })
    cy.get('#confirm-alert-text').should('have.text', 'You pressed Cancel!')
  })
 

})


//https://docs.cypress.io/guides/guides/web-security#Limitations
//https://docs.cypress.io/api/commands/origin#Syntax
describe('cypress web security', () => {
  //skip means it will not run. we have diffrent domains so it will fail
  it.skip('Validate visiting two different domians', () => {
    cy.visit('http://www.webdriveruniversity.com/');
    cy.visit("https://www.automationteststore.com/");
    cy.visit("https://www.google.com/");


  })
  it('User should not be able to submit contact us without filling all the required fields', () => {
    cy.visit('http://www.webdriveruniversity.com/');
    cy.get('#automation-test-store').invoke('removeAttr', 'target').click();

  })

  it('Origin command', () => {
    cy.origin('webdriveruniversity.com', () =>{
      cy.visit("/")
    })
    
    cy.origin("google.com",()=>{
      cy.visit("/")
    });
  })

})
// add two lines in the cypress.config file
// chromeWebSecurity: false,
// experimentalSessionAndOrigin: true
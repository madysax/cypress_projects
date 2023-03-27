//navigate forword, backword and refresh page

describe('Validate webdriveruni home page links', () =>{
  it.only('User should be able to contact us successfully', () =>{
      cy.visit('http://www.webdriveruniversity.com');
      cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true});
      cy.url().should('include','contactus')

      cy.go('back')
      cy.reload()
      cy.url().should('include', 'http://www.webdriveruniversity.com')
      cy.reload(true)// reload without using cache
      cy.go('forward')
      cy.url().should('include','contactus')

      cy.go('back')
      //cy.get('#login-portal').click()
      cy.get('#login-portal').invoke('removeAttr', 'target').click()
      cy.go('back')


      // Chalange
      cy.get('#to-do-list').invoke('removeAttr', 'target').click()
      cy.url().should('include', 'To-Do-List')
      cy.go('back')


  })

  })
// cypress does not support the iframe so we need to do workaround
//https://docs.cypress.io/guides/guides/web-security#Cross-origin-iframes

describe('handle the iframe and modals', () => {
  it('Validate the iframe and modals', () => {
    cy.visit("http://www.webdriveruniversity.com/")
    cy.get('#iframe').invoke('removeAttr', 'target').click()

    cy.get('#frame').then($iframe => {
      const body = $iframe.contents().find('body')
      cy.wrap(body).as('iframe')

    })
    cy.get('@iframe').find('#button-find-out-more').click()
    cy.get('@iframe').find('.modal-body').as('modal')
    cy.get('@modal').should($expectedText => {
      const text = $expectedText.text()
      expect(text).to.include('Welcome to webdriveruniversity.com we sell a wide range of electrical goods such as laptops, game consoles, cameras...')
    })

    cy.get('@iframe').contains('Close').click()
  });

});
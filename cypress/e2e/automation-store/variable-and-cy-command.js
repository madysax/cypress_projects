//https://docs.cypress.io/guides/core-concepts/variables-and-aliases#Closures

describe("Verifying variables, cypress commands and jquery commands", () => {
  it("Navigating to specific product pages", () => {
    cy.visit("https://automationteststore.com/")
    //These are not recommended in cypress
    //The following will pass
    // const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup")
    // makeupLink.click();
    // const skinCareLink = cy.get("a[href*='product/category&path=']").contains("Skincare")
    // skinCareLink.click();

    /*        //The following will fail
    const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup")
    const skinCareLink = cy.get("a[href*='product/category&path=']").contains("Skincare")
    makeupLink.click();
    skinCareLink.click();
    */

    //Recommended Approch
    cy.get("a[href*='product/category&path=']").contains("Makeup").click();
    cy.get("a[href*='product/category&path=']").contains("Skincare").click();
  })

  it("Navigating to Makeup product pages", () => {
    cy.visit("https://automationteststore.com/")
    cy.get("a[href*='product/category&path=']").contains("Makeup").click();
    cy.get('span[class="maintext"]').then(($headerText) => {
      const headerText = $headerText.text()
      cy.log("Found header text-->" + headerText)
      expect(headerText).is.eq('Makeup')
    })
  })

  it("Navigating to Skincare product pages", () => {
    cy.visit("https://automationteststore.com/")
    cy.get("a[href*='product/category&path=']").contains("Skincare").click();
    cy.get('span[class="maintext"]').then(($headerSkinText) => {
      const headerSkinText = $headerSkinText.text();
      cy.log("Found Skin care Text--->" + headerSkinText)
    })

  })

  it.only("Validate properties of the Contact Us page", () => {
    cy.visit("https://automationteststore.com/index.php?rt=content/contact")

    //Uses cypress commands and chaining
    cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name')

    //JQuery Approach (then is promise and text jquery command) because we can handle the order of execution
    cy.contains('#ContactUsFrm', 'Contact Us Form').then(text => {
      const firstNameText = text.find('#field_11').text()
      expect(firstNameText).to.contain('First name')

      //Embedded commands(Clousers)
      cy.get('#field_11').then(fnTexr => {
        cy.log(fnTexr.text())

      })

    })


  })

})
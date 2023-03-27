//https://docs.cypress.io/api/commands/each#Examples
//https://docs.cypress.io/api/commands/wrap#Elements
describe("Iterate over elements", () => {
  it("Log information of all hair care products", () => {
    cy.visit("https://automationteststore.com/")
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
      cy.log("Index :" + index + ":" + $el.text())
      if ($el.text().includes('Curls to straight Shampoo')) {
        cy.wrap($el).click();
      }

    })
  })
  it.only("select the conditioner items", () => {
    cy.visit("https://automationteststore.com/")
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    cy.get('div[class="mt10 align_center"]').contains("Conditioner").click();
    cy.get('.fixed .prdocutname').each(($el, index, $list) => {
      cy.log($el.text())
      if ($el.text().includes("Highlighting Expressions")) {
        cy.wrap($el).click();

      }

    })

  })
})
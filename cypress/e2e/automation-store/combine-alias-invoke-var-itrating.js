//https://www.w3schools.com/js/js_arrays.asp
//https://www.w3schools.com/js/js_loop_for.asp
//https://www.w3schools.com/jsref/jsref_split.asp

describe('Combaning Alias, Invoke, Variable and Iterating through data', () => {
  it("calculate total of non sale products", () => {
    cy.visit("https://automationteststore.com/")
    cy.get('.thumbnail').as('productThumbnail')
    cy.get('@productThumbnail').find('.oneprice').invoke('text').as('itemPrice')
    cy.get('@itemPrice').then($link => {
      var itemsPriceTotal = 0;
      var itemsTotal = 0;
      var itemPrice = $link.split('$')
      var i;
      for (i = 0; i < itemPrice.length; i++) {
        cy.log(itemPrice[i])
        itemsPriceTotal += Number(itemPrice[i])
      }
      itemsTotal += itemsPriceTotal

      cy.log("Total of Non Sale items:-->" + itemsPriceTotal)

    })
  });

  it("Calculate total of sale products", ()=>{
    cy.visit("https://automationteststore.com/")
    cy.get('.thumbnail').as('productThumbnail')
    cy.get('@productThumbnail').find('.pricenew').invoke('text').as('saleItems')
    
   
  })

});
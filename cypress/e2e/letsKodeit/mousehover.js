describe("Validate the mousehover", () =>{

  beforeEach(() =>{
    cy.visit("https://www.letskodeit.com/practice")
  })
  it("Verify the mousehover and click on the top", () =>{
    cy.get('#mousehover').trigger('mouseover');
   cy.xpath('//*[@id="mouse-hover-example-div"]/div[1]/fieldset/div/div/a[1]').invoke('show').click({ force: true });
  })
})


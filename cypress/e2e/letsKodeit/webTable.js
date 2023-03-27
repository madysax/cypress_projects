describe("handle webtable", () =>{
  beforeEach(()=>{
    cy.visit("https://www.letskodeit.com/practice")
  })

  it("validate selenium price", () =>{

    cy.get("#product").each(($elm, index, $list)=> {
      const t = $elm.text();
    
      if (t.includes('Selenium')){
        cy.xpath('//*[@id="product"]/tbody/tr[2]/td[2]')
        .eq(index).next().then(function(d) {
          const r = d.text()
          //assertion
      
        expect(r).to.contains('35');
        })
      }
      })
      
    })
  
  })

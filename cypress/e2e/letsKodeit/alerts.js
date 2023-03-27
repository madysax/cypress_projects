describe("Validate the alerts", () =>{

  beforeEach(() =>{
    cy.visit("https://www.letskodeit.com/practice")
  })


  it("User can accepts the alert",() =>{
    cy.get("#alertbtn").invoke("removeAttr", "Target").click();
    cy.on('window:alert', (str) =>{
      expect(str).to.equal("Hello , share this practice page and share your knowledge")
    })
  
   
  })
  it("User can confirm the alert",() =>{
   cy.get('#confirmbtn').click();
   cy.on('window:alert', (t) =>{
    //expect(t).to.equal("Hello , Are you sure you want to confirm?")
    return true;
   })

   })

   it("User can cancel the alert",() =>{
    cy.get('#confirmbtn').click();
    cy.on('window:alert', (t) =>{
     //expect(t).to.equal("Hello , Are you sure you want to confirm?")
     return false;
    })
 
  })
})
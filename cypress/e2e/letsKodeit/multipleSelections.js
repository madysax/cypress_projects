describe("User can select multiple items",()=>{

  beforeEach(function (){
    cy.visit("https://www.letskodeit.com/practice");
  });
  it("User can select multiple items",() =>{
   
 cy.get("#multiple-select-example").select(['Apple', 'Orange']);
  })
  
})
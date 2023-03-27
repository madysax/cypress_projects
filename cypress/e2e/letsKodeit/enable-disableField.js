describe("validate the text field is enable/disabled",()=>{
  beforeEach(() =>{
    cy.visit("https://www.letskodeit.com/practice")
  })
  it("Verify the text field is enabled and input the text",()=>{
    cy.get("#enabled-example-input").should("be.enabled").type("Lets code it")
  });


  it.only("Verify the user can click on the disable button and not able to enter the text",()=>{
    cy.get('#enabled-example-input').type("Hello World!!");
    cy.get('#enabled-example-input').then(function (text1){
      cy.log(text1.text())
    cy.get("#disabled-button").click();
    cy.get("#enabled-example-input").should("be.disabled");
    });

   // cy.log(textValue);
    })
  })
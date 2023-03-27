

describe("User can select items", () =>{
  beforeEach(function (){
    cy.visit("https://www.letskodeit.com/practice");
  });

  it("Verify default select item", () =>{
    cy.get("#carselect").should("have.value", "bmw");
  });
  it("Verify user can select BENZ", () =>{
    cy.get("#carselect").select("benz").should("have.value", "benz");
  });
  it("Verify user can select Honda", () =>{
    cy.get("#carselect").select("honda").should("have.value", "honda");
  });
})

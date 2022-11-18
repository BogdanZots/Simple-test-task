describe("Simple home test", () => {
  it("should have check home page", () => {
    cy.visit("/home");
    cy.get("div").should("have.class", "home");
  });
});

describe("Analisys page", () => {
  const inputText = "https://reactdev.ru/";
  it("should send requst with data in input  when button was clicked", () => {
    cy.visit("/analisys");
    const input = cy.get('input[type="text"]');
    const button = cy.get("button").contains("Analisys");
    button.should("be.disabled");
    input.type(`${inputText}`).should("have.value", inputText);
    button.should("be.enabled");
    button.click().request(`${inputText}`);
  });
});

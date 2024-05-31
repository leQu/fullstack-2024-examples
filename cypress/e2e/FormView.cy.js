describe("FormView", () => {
  it("should visit form view", () => {
    cy.visit("http://localhost:3000/examples/form");
    cy.get("h1").should("contain", "Hej Anonym!");
  });
  it("should submit the form successfully", () => {
    cy.fixture("form.json").then((form) => {
      cy.visit("http://localhost:3000/examples/form");
      cy.get("input[name=name]").type(form.name);
      cy.get("input[name=email]").type(form.email);
      cy.get("textarea[name=message]").type(form.message);
      cy.get("form").submit();
      cy.get("h1").should("contain", "Hej Alex!");
    });
  });
});

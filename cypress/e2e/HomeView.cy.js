describe("HomeView", () => {
  it("visit home view", () => {
    cy.visit("http://localhost:3000/");
    cy.title().should("contains", "React App");
    cy.get("h1").should("contain", "Welcome to our amazing site");
  });
  it("checks darkmode functionallity", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-testid="vajavill-app-header"]').should("have.class", "light");
    cy.get("button").click();
    cy.get('[data-testid="vajavill-app-header"]').should("have.class", "dark");
  });
  it("validate shoping list", () => {
    cy.intercept(
      "GET",
      "https://dummyjson.com/products?limit=5&select=title,price",
      {
        fixture: "products.json",
      }
    );
    cy.visit("http://localhost:3000/");
    cy.get('[data-testid="cypress-product-list"]').should("exist");
    cy.get('[data-testid="cypress-product-list"] li').should("have.length", 3);
    cy.get('[data-testid="cypress-product-list"] li:first').should(
      "contain",
      "First item: 10"
    );
  });
});

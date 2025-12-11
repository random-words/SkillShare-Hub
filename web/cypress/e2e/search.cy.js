describe("Search Feature", () => {
  beforeEach(() => {
    const uniqueId = Date.now();
    cy.visit("/auth/register");
    cy.get('input[placeholder="Email"]').type(
      `searcher_${uniqueId}@example.com`
    );
    cy.get('input[placeholder="Password"]').type("password123");
    cy.get('input[placeholder="Confirm password"]').type("password123");
    cy.contains("button", "Sign Up").click();

    cy.visit("/search");
  });

  it("should search for a user by skill and show results", () => {
    const searchTerm = "C#";
    cy.get('input[placeholder="Search"]').type(searchTerm);
    cy.get('div[class*="person"]').should("have.length.at.least", 1);
    cy.contains(searchTerm).should("be.visible");
    cy.contains("button", "Invite").should("be.visible");
  });

  it("should invite a user and redirect to chat", () => {
    cy.intercept("POST", "**/api/matches", {
      statusCode: 200,
      body: { message: "Match created" },
    }).as("inviteRequest");

    cy.get('input[placeholder="Search"]').type("C#");

    cy.get('div[class*="person"]').should("have.length.at.least", 1);

    cy.contains("button", "Invite").first().click();

    cy.wait("@inviteRequest").its("response.statusCode").should("eq", 200);

    cy.url().should("include", "/chat");
  });
});

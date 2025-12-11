describe("User Path", () => {
  const uniqueId = Date.now();
  const testUser = {
    name: `TestUser${uniqueId}`,
    email: `auto_${uniqueId}@example.com`,
    password: "password123",
  };

  it("should register, complete onboarding, view profile and logout", () => {
    cy.visit("/auth/register");

    cy.contains("Create account").should("be.visible");

    cy.get('input[placeholder="Email"]').type(testUser.email);
    cy.get('input[placeholder="Password"]').type(testUser.password);
    cy.get('input[placeholder="Confirm password"]').type(testUser.password);

    cy.contains("button", "Sign Up").click();

    cy.url().should("include", "/onboarding");
    cy.contains("What can you teach?").should("be.visible");

    cy.get("select").first().select(1);

    cy.get("select").last().select("intermediate");

    cy.contains("button", "Add").click();

    cy.get("ul li").should("have.length.at.least", 1);

    cy.contains("button", "Finish Setup").click();

    cy.url().should("include", "/profile");

    const expectedName = testUser.email.split("@")[0];
    cy.contains(expectedName).should("be.visible");

    cy.contains("Skills I Can Teach").should("be.visible");
    cy.contains("No skills added yet").should("not.exist");

    cy.contains("button", "Log Out").click();

    cy.on("window:confirm", () => true);

    cy.url().should("include", "/auth/login");
  });
});

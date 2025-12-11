import Profile from "../../../src/pages/Profile";
import { AuthContext } from "../../../src/app/authContext";
import { BrowserRouter } from "react-router-dom";

describe("<Profile />", () => {
  it("shows main profile info and skills", () => {
    const mockUser = {
      id: 7,
      name: "Test User",
      email: "test@example.com",
      headline: "Frontend Developer",
      skills: [
        { name: "HTML", level: "advanced" },
        { name: "CSS", level: "intermediate" },
      ],
      learning: [],
    };

    const mockAuthValue = {
      user: mockUser,
      token: "fake-test-token",
      isAuthenticated: true,
      logout: cy.stub(),
    };

    cy.intercept("GET", "**/api/auth/me", {
      statusCode: 200,
      body: { user: mockUser },
    }).as("getFreshProfile");

    cy.mount(
      <BrowserRouter>
        <AuthContext.Provider value={mockAuthValue}>
          <Profile />
        </AuthContext.Provider>
      </BrowserRouter>
    );

    cy.wait("@getFreshProfile");

    cy.contains("Test User").should("be.visible");
    cy.contains("Frontend Developer").should("be.visible");

    cy.contains("HTML").should("be.visible");
    cy.contains("CSS").should("be.visible");
  });
});

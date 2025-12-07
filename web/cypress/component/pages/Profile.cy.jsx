import React from "react";
import { MemoryRouter } from "react-router-dom";
import Profile from "../../../src/pages/Profile";
import { AuthContext } from "../../../src/app/authContext";

describe("<Profile />", () => {
  it("shows main profile info and skills", () => {
    const mockUser = {
      name: "Sophia Carter",
      email: "sophia@example.com",
      headline: "Senior Developer",
    };

    const authValue = {
      user: mockUser,
      isAuthenticated: true,
      login: cy.stub(),
      logout: cy.stub(),
    };

    cy.mount(
      <AuthContext.Provider value={authValue}>
        <MemoryRouter>
          <Profile />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    cy.contains("Sophia Carter").should("be.visible");
    cy.contains("Senior Developer").should("be.visible");

    cy.contains("Skills I Can Teach").should("be.visible");

    cy.contains("HTML").should("be.visible");
    cy.contains("CSS").should("be.visible");

    cy.contains("Skills I Want to Learn").should("be.visible");
    cy.contains("JavaScript").should("be.visible");
  });
});

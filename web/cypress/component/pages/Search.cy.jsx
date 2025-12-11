import React from "react";
import { mount } from "cypress/react18";
import { MemoryRouter } from "react-router-dom";
import Search from "../../../src/pages/Search";
import { AuthContext } from "../../../src/app/authContext";

describe("<Search />", () => {
  it("shows loading and then mock results", () => {
    cy.intercept("GET", "**/users*", {
      statusCode: 200,
      delay: 100,
      body: [
        {
          id: 2,
          name: "Sophia Bennett",
          subtitle: "Graphic Design, Illustration",
          rating: "4.9",
          lessons: 15,
        },
      ],
    }).as("searchQuery");

    const authValue = {
      isAuthenticated: true,
      token: "fake-token",
      user: { name: "Test User" },
      login: cy.stub(),
      logout: cy.stub(),
    };

    mount(
      <AuthContext.Provider value={authValue}>
        <MemoryRouter initialEntries={["/search?q=design"]}>
          <Search />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    cy.contains("Find a Partner").should("be.visible");

    cy.contains("Loading results...").should("be.visible");

    cy.wait("@searchQuery");

    cy.contains("Sophia Bennett").should("be.visible");
    cy.contains("Graphic Design").should("be.visible");
  });
});

import React from "react";
import { MemoryRouter } from "react-router-dom";
import { AuthProvider } from "../../../src/app/authContext";
import Login from "../../../src/pages/Auth/Login";

describe("<Login />", () => {
  const mountWithProviders = () =>
    cy.mount(
      <MemoryRouter initialEntries={["/auth/login"]}>
        <AuthProvider>
          <Login />
        </AuthProvider>
      </MemoryRouter>,
    );

  it("renders form fields", () => {
    mountWithProviders();

    cy.get("input[placeholder='Email']").should("exist");
    cy.get("input[placeholder='Password']").should("exist");
    cy.contains("button", "Log In").should("be.visible");
  });

  it("shows validation errors for invalid input", () => {
    mountWithProviders();

    cy.contains("button", "Log In").click();

    cy.contains("Enter a valid email").should("be.visible");
    cy.contains("Password is required").should("be.visible");
  });
});

import React from "react";
import { MemoryRouter } from "react-router-dom";
import { AuthProvider } from "../../../src/app/authContext";
import Register from "../../../src/pages/Auth/Register";

describe("<Register />", () => {
  const mountWithProviders = () =>
    cy.mount(
      <MemoryRouter initialEntries={["/auth/register"]}>
        <AuthProvider>
          <Register />
        </AuthProvider>
      </MemoryRouter>,
    );

  it("renders form fields", () => {
    mountWithProviders();

    cy.get("input[placeholder='Email']").should("exist");
    cy.get("input[placeholder='Password']").should("exist");
    cy.get("input[placeholder='Confirm password']").should("exist");
  });

  it("shows validation errors", () => {
    mountWithProviders();

    cy.get("input[placeholder='Email']").type("user@example.com");
    cy.get("input[placeholder='Password']").type("123456");
    cy.get("input[placeholder='Confirm password']").type("abcdef");

    cy.contains("button", "Sign Up").click();

    cy.contains("Enter a valid email").should("not.exist");
    cy.contains("Min 6 characters").should("not.exist");
    cy.contains("Passwords do not match").should("be.visible");
  });
});

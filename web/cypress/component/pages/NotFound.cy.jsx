import React from "react";
import { MemoryRouter } from "react-router-dom";
import NotFound from "../../../src/pages/NotFound";

describe("<NotFound />", () => {
  it("shows 404 text and link to home", () => {
    cy.mount(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>,
    );

    cy.contains("404").should("be.visible");
    cy.contains("Page Not Found").should("be.visible");
    cy.contains("Go back to Home").should("be.visible");
  });
});

import React from "react";
import { MemoryRouter } from "react-router-dom";
import Search from "../../../src/pages/Search";

describe("<Search />", () => {
  it("shows loading and then mock results", () => {
    cy.mount(
      <MemoryRouter>
        <Search />
      </MemoryRouter>,
    );

    cy.contains("Loading results...").should("be.visible");

    cy.contains("Ethan Carter").should("be.visible");
    cy.contains("Sophia Bennett").should("be.visible");
  });
});

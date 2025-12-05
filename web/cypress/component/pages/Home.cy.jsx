import React from "react";
import { MemoryRouter } from "react-router-dom";
import Home from "../../../src/pages/Home";

describe("<Home />", () => {
  it("renders hero, input and button", () => {
    cy.mount(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    cy.contains("Learn and Teach.").should("be.visible");
    cy.get("input[placeholder='Search for skills']").should("exist");
    cy.contains("button", "Get Started").should("be.visible");
  });
});

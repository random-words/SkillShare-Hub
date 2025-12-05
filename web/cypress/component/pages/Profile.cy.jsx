import React from "react";
import { MemoryRouter } from "react-router-dom";
import Profile from "../../../src/pages/Profile";

describe("<Profile />", () => {
  it("shows main profile info and skills", () => {
    cy.mount(
      <MemoryRouter>
        <Profile />
      </MemoryRouter>,
    );

    cy.contains("Sophia Carter").should("be.visible");
    cy.contains("Skills I Can Teach").should("be.visible");
    cy.contains("Python").should("be.visible");
    cy.contains("Skills I Want to Learn").should("be.visible");
    cy.contains("Machine Learning").should("be.visible");
  });
});

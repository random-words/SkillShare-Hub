import React from "react";
import { MemoryRouter } from "react-router-dom";
import Header from "../../src/components/Header";

describe("<Header />", () => {
  it("renders title without buttons", () => {
    cy.mount(
      <MemoryRouter>
        <Header title="SkillShare Hub" />
      </MemoryRouter>,
    );

    cy.contains("SkillShare Hub").should("be.visible");
    cy.get('button[aria-label="Go back"]').should("not.exist");
    cy.get('button[aria-label="Open menu"]').should("not.exist");
  });

  it("renders back button when back=true", () => {
    cy.mount(
      <MemoryRouter>
        <Header title="With Back" back />
      </MemoryRouter>,
    );

    cy.get('button[aria-label="Go back"]').should("be.visible");
  });

  it("renders menu button when menu=true", () => {
    cy.mount(
      <MemoryRouter>
        <Header title="With Menu" menu />
      </MemoryRouter>,
    );

    cy.get('button[aria-label="Open menu"]').should("be.visible");
  });
});

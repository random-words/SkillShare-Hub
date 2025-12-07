import React from "react";
import { mount } from "cypress/react18";
import MatchCard from "../../src/components/MatchCard";

describe("<MatchCard />", () => {
  it("uses first letter of name as avatar fallback", () => {
    mount(<MatchCard name="Anthony" />);
    cy.get('[data-testid="match-card-avatar"]').should("contain.text", "A");
  });

  it("renders name, subtitle and meta", () => {
    mount(
      <MatchCard name="Sophia Bennett" subtitle="Graphic Design" meta="4.8" />
    );

    cy.contains("Sophia Bennett").should("be.visible");
    cy.contains("Graphic Design").should("be.visible");

    cy.contains("4.8").should("be.visible");
  });
});

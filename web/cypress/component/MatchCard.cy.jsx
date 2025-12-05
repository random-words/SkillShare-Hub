import React from "react";
import MatchCard from "../../src/components/MatchCard";

describe("<MatchCard />", () => {
  it("renders name, subtitle and meta", () => {
    cy.mount(<MatchCard name="Ethan Carter" subtitle="Photography" rating="4.8" lessons={12} />);

    cy.contains("Ethan Carter").should("be.visible");
    cy.contains("Photography").should("be.visible");
    cy.contains("4.8").should("be.visible");
    cy.contains("12 lessons").should("be.visible");
  });

  it("uses first letter of name as avatar fallback", () => {
    cy.mount(<MatchCard name="Sophia" />);
    cy.get("[class*='avatar']").should("contain.text", "S");
  });
});

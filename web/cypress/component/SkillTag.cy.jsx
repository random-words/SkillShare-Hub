import React from "react";
import SkillTag from "../../src/components/SkillTag";

describe("<SkillTag />", () => {
  it("renders text with tag class", () => {
    cy.mount(<SkillTag>React</SkillTag>);

    cy.get("span")
      .contains("React")
      .should("have.attr", "class")
      .then(cls => {
        expect(cls).to.contain("tag");
      });
  });
});

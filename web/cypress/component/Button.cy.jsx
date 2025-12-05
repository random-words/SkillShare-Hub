import React from "react";
import Button from "../../src/components/Button/Button";

describe("<Button />", () => {
  it("renders children", () => {
    cy.mount(<Button>Click me</Button>);
    cy.contains("Click me").should("be.visible");
  });

  it("uses primary variant by default", () => {
    cy.mount(<Button>Primary</Button>);

    cy.get("button")
      .should("have.attr", "class")
      .then(cls => {
        expect(cls).to.contain("btn");
        expect(cls).to.contain("primary");
      });
  });

  it("supports ghost variant", () => {
    cy.mount(<Button variant="ghost">Ghost</Button>);

    cy.get("button")
      .should("have.attr", "class")
      .then(cls => {
        expect(cls).to.contain("btn");
        expect(cls).to.contain("ghost");
      });
  });
});

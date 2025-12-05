import React from "react";
import Input from "../../src/components/Input/Input";

describe("<Input />", () => {
  it("renders label and placeholder", () => {
    cy.mount(<Input label="Email" placeholder="Enter email" />);
    cy.contains("Email").should("be.visible");
    cy.get("input").should("have.attr", "placeholder", "Enter email");
  });

  it("shows error text and error style", () => {
    cy.mount(<Input label="Email" error="Invalid" />);

    cy.contains("Invalid").should("be.visible");
    cy.get("input")
      .should("have.attr", "class")
      .then(cls => {
        expect(cls).to.contain("error");
      });
  });
});

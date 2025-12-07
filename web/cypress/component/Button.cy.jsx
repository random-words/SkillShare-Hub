import React from "react";
import { mount } from "cypress/react18";
import Button from "../../src/components/Button/Button.jsx";
import styles from "../../src/components/Button/Button.module.css";

describe("<Button />", () => {
  it("renders children", () => {
    mount(<Button>Click me</Button>);
    cy.contains("Click me").should("exist");
  });

  it("uses primary variant by default", () => {
    mount(<Button>Primary</Button>);

    cy.get("button")
      .should("have.class", styles.btn)
      .and("have.class", styles.primary);
  });

  it("supports ghost variant", () => {
    mount(<Button variant="ghost">Ghost</Button>);

    cy.get("button")
      .should("have.class", styles.btn)
      .and("have.class", styles.ghost);
  });
});

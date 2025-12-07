import React from "react";
import { mount } from "cypress/react18";
import Input from "../../src/components/Input/Input.jsx";
import styles from "../../src/components/Input/Input.module.css";

describe("<Input />", () => {
  it("renders label and placeholder", () => {
    mount(<Input label="Email" placeholder="Enter email" />);

    cy.contains("Email").should("exist");
    cy.get("input[placeholder='Enter email']").should("exist");
  });

  it("shows error text and error style", () => {
    mount(<Input label="Email" error="Required" />);

    cy.contains("Required").should("exist");
    cy.get("input").should("have.class", styles.error);
  });
});

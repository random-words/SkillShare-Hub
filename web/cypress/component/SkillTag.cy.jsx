import React from "react";
import { mount } from "cypress/react18";
import SkillTag from "../../src/components/SkillTag.jsx";
import styles from "../../src/components/SkillTag.module.css";

describe("<SkillTag />", () => {
  it("renders text with tag class", () => {
    mount(<SkillTag>Python</SkillTag>);

    cy.get("span")
      .should("have.class", styles.tag)
      .and("contain.text", "Python");
  });
});

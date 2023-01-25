import React from "react";
import Section from "../section/Section";
import { socialLink } from "../../data/data";

const contact = () => {
  return (
    <Section title="contact">
      {socialLink.map((link) => {
        const { id, icon, href, name } = link;
        return (
          <a href={href} target="_blank" rel="noreferrer" key={id}>
            <p>
              <i className={`${icon} fa-3x`}></i> {name}
            </p>
          </a>
        );
      })}
    </Section>
  );
};

export default contact;

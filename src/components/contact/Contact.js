import React from "react";
import Section from "../section/Section";
import { socialLink } from "../../data/data";

const contact = () => {
  return (
    <Section title="contact">
      {socialLink.map((link) => {
        const { id, icon, href, name } = link;
        return (
          <a href={href} target="_blank" key={id}>
            <p>
              <i className={`${icon} fa-5x`}></i> {name}
            </p>
          </a>
        );
      })}
    </Section>
  );
};

export default contact;

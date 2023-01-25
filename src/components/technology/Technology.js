// import javascript from "../../images/JavaScript-logo.svg";
import React from "react";
import { technology } from "../../data/data";
import TechnologyItem from "../technologyItem/TechnologyItem";
import Section from "../section/Section";

const Technology = () => {
  return (
    <Section cls="technology" id="technology" title="Technology">
      <TechnologyItem technology={technology}></TechnologyItem>
    </Section>
  );
};

export default Technology;

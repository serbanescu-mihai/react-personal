// import javascript from "../../images/JavaScript-logo.svg";
import React from "react";
import { technology } from "../../data/data";
import TechnologyItem from "../technologyItem/TechnologyItem";
import Section from "../section/Section";

const Technology = () => {
  return (
    <Section title="technology">
      <TechnologyItem technology={technology}></TechnologyItem>
    </Section>
  );
};

export default Technology;

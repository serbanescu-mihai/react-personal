import React from "react";
import Section from "../section/Section";
import SingleProject from "../singleProject/SingleProject";
import { projects } from "../../data/data";

const Projects = () => {
  return (
    <Section title="projects">
      <SingleProject projects={projects}></SingleProject>
    </Section>
  );
};

export default Projects;

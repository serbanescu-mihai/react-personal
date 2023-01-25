import React from "react";
import Section from "../section/Section";
import SingleProject from "../singleProject/SingleProject";
import { projects } from "../../data/data";

const Projects = () => {
  return (
    <Section cls="projects" id="projects" title="Projects">
      <SingleProject projects={projects}></SingleProject>
    </Section>
  );
};

export default Projects;

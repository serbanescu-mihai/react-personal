import React from "react";

const SingleProject = ({ projects }) => {
  return (
    <>
      {projects.map((project) => {
        return (
          <div className="project-container" key={project.id}>
            <img src={project.image} alt="" className="project-image" />
            <p className="project-title">{project.projectName}</p>
            <p className="project-description">{project.projectDescription}</p>
            <div className="project-technology">
              <p>Built using:</p>
              <div className="project-technology-container">
                {project.tools.map((tools) => {
                  return (
                    <div className="individual-technology" key={tools.id}>
                      <i className={tools.image}></i>
                      <p>{tools.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <a
              className="project-link"
              href={project.url}
              target="_blank"
              rel="noreferrer"
            >
              Live Demo <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a
              className="project-link"
              href={project.gitHubLink}
              target="_blank"
              rel="noreferrer"
            >
              GitHub code <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        );
      })}
      ;
    </>
  );
};

export default SingleProject;

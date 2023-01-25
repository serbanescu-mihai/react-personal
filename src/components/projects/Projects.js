import React from "react";

const Projects = () => {
  return (
    <section className="section projects" id="projects">
      <div className="section-title">
        <h2 className="section-h2">Projects</h2>
      </div>
      <div className="underline"></div>
      <div className="section-container">
        {/* <!-- single project --> */}
        <div className="project-container">
          <img src="./images//road.jpeg" alt="" className="project-image" />
          <p className="project-title">Project 1</p>
          <p className="project-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
            dignissimos aspernatur animi quis. Sed, suscipit.
          </p>
          <div className="project-technology">
            <p>Built using:</p>
            <div className="project-technology-container">
              <div className="individual-technology">
                <i className="fa-brands fa-js"></i>
                <p>JavaScript</p>
              </div>

              <div className="individual-technology">
                <i className="fa-brands fa-html5"></i>
                <p>HTML5</p>
              </div>
              <div className="individual-technology">
                <i className="fa-brands fa-sass"></i>
                <p>Sass</p>
              </div>
              <div className="individual-technology">
                <i className="fa-brands fa-css3"></i>
                <p>CSS3</p>
              </div>
            </div>
          </div>
          <a className="project-link" href="">
            Live Demo <i className="fa-solid fa-arrow-right"></i>
          </a>
          <a
            className="project-link"
            href="https://github.com/serbanescu-mihai"
            target="_blank"
          >
            GitHub code <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        {/* <!-- end single project -->
        <!-- single project --> */}
        <div className="project-container">
          <img src="./images//road.jpeg" alt="" className="project-image" />
          <p className="project-title">Project 2</p>
          <p className="project-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
            dignissimos aspernatur animi quis. Sed, suscipit.
          </p>
          <div className="project-technology">
            <p>Built using:</p>
            <div className="project-technology-container">
              <div className="individual-technology">
                <i className="fa-brands fa-js"></i>
                <p>JavaScript</p>
              </div>
              <div className="individual-technology">
                <i className="fa-brands fa-angular"></i>
                <p>Angular</p>
              </div>
              <div className="individual-technology">
                <i className="fa-brands fa-html5"></i>
                <p>HTML5</p>
              </div>
              <div className="individual-technology">
                <i className="fa-brands fa-css3"></i>
                <p>CSS3</p>
              </div>
            </div>
          </div>
          <a className="project-link" href="">
            Live Demo <i className="fa-solid fa-arrow-right"></i>
          </a>
          <a
            className="project-link"
            href="https://github.com/serbanescu-mihai"
            target="_blank"
          >
            GitHub code <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        {/* <!-- end single project -->
        <!-- single project --> */}
        <div className="project-container">
          <img src="./images//road.jpeg" alt="" className="project-image" />
          <p className="project-title">Project 3</p>
          <p className="project-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
            dignissimos aspernatur animi quis. Sed, suscipit.
          </p>
          <div className="project-technology">
            <p>Built using:</p>
            <div className="project-technology-container">
              <div className="individual-technology">
                <i className="fa-brands fa-js"></i>
                <p>JavaScript</p>
              </div>
              <div className="individual-technology">
                <i className="fa-brands fa-react"></i>
                <p>React</p>
              </div>
              <div className="individual-technology">
                <i className="fa-brands fa-html5"></i>
                <p>HTML5</p>
              </div>
              <div className="individual-technology">
                <i className="fa-brands fa-css3"></i>
                <p>CSS3</p>
              </div>
            </div>
          </div>
          <a className="project-link" href="">
            Live Demo <i className="fa-solid fa-arrow-right"></i>
          </a>
          <a
            className="project-link"
            href="https://github.com/serbanescu-mihai"
            target="_blank"
          >
            GitHub code <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        {/* <!-- end single project --> */}
      </div>
    </section>
  );
};

export default Projects;

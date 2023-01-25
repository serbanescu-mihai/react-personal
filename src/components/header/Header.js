import React from "react";

const Header = () => {
  return (
    <section className="section header" id="header">
      <div className="section-title">
        <h2 className="section-h2"></h2>
      </div>
      <p>Hello World!</p>
      <p>
        I'm<span> Mihai Serbanescu</span>
      </p>
      <p>a software engineer</p>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/mihaiserbanescu/" target="_blank">
          <p>
            <i className="fa-brands fa-linkedin"></i> LinkedIN
          </p>
        </a>
        <a href="https://github.com/serbanescu-mihai" target="_blank">
          <p>
            <i className="fa-brands fa-github"></i> GitHub
          </p>
        </a>
      </div>
    </section>
  );
};

export default Header;

import React from "react";

const contact = () => {
  return (
    <section className="section contact" id="contact">
      <div className="section-title">
        <h2 className="section-h2">Contact</h2>
      </div>
      <div className="underline"></div>
      <div className="section-container">
        <a href="https://www.linkedin.com/in/mihaiserbanescu/" target="_blank">
          <p>
            <i className="fa-brands fa-linkedin fa-5x"></i> LinkedIN
          </p>
        </a>
        <a href="https://github.com/serbanescu-mihai" target="_blank">
          <p>
            <i className="fa-brands fa-github fa-5x"></i> GitHub
          </p>
        </a>
      </div>
    </section>
  );
};

export default contact;

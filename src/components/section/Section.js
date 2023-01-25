import React from "react";

const Section = ({ children, title }) => {
  return (
    <section className={`section ${title}`} id={title}>
      <div className="section-title">
        <h2 className="section-h2">{title}</h2>
      </div>
      <div className="underline"></div>
      <div className="section-container">{children}</div>
    </section>
  );
};

export default Section;

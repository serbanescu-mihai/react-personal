import React from "react";

const Section = ({ children, cls, id, title }) => {
  return (
    <section className={`section ${cls}`} id={id}>
      <div className="section-title">
        <h2 className="section-h2">{title}</h2>
      </div>
      <div className="underline"></div>
      <div className="section-container">{children}</div>
    </section>
  );
};

export default Section;

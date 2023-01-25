import React from "react";
import { socialLink } from "../../data/data";

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
        {socialLink.map((link) => {
          const { id, icon, href, name } = link;
          return (
            <a href={href} target="_blank" key={id}>
              <p>
                <i className={icon}></i> {name}
              </p>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Header;

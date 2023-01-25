import React from "react";

const Technology = () => {
  return (
    <section className="section technology" id="technology">
      <div className="section-title">
        <h2 className="section-h2">Technology</h2>
      </div>
      <div className="underline"></div>
      <div className="section-container">
        {/* <!-- JS --> */}
        <div className="technology-item">
          <img src="./images/JavaScript-logo.svg" alt="JavaScript logo" />
          <p>JavaScript</p>
        </div>

        {/* <!-- React --> */}
        <div className="technology-item">
          <img src="./images/React-logo.svg" alt="React logo" />
          <p>React</p>
        </div>

        {/* <!-- Angular --> */}
        <div className="technology-item">
          <img src="./images/angular-logo.svg" alt="Angular logo" />
          <p>Angular</p>
        </div>

        {/* <!-- node.js --> */}
        <div className="technology-item">
          <img src="./images/Node.js-logo.svg" alt="node.js logo" />
          <p>node.js</p>
        </div>

        {/* <!-- HTML --> */}
        <div className="technology-item">
          <img src="./images/HTML5-logo.svg" alt="HTML5 logo" />
          <p>HTML 5</p>
        </div>
        {/* <!-- CSS --> */}
        <div className="technology-item">
          <img src="./images/CSS3-logo.svg" alt="CSS3 logo" />
          <p>CSS 3</p>
        </div>

        {/* <!-- Sass --> */}
        <div className="technology-item">
          <img src="./images/Sass-Logo.svg" alt="Sass logo" />
          <p>Sass</p>
        </div>

        {/* <!-- git --> */}
        <div className="technology-item">
          <img src="./images/Git-logo.svg" alt="git logo" />
          <p>git</p>
        </div>

        {/* <!-- PostgreSQL --> */}
        <div className="technology-item">
          <img src="./images/PostgreSQL-logo.svg" alt="PostgreSQL logo" />
          <p>PostgreSQL</p>
        </div>
      </div>
    </section>
  );
};

export default Technology;

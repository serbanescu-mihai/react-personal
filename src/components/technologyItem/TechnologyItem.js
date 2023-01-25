import React from "react";

const TechnologyItem = ({ technology }) => {
  return (
    <>
      {technology.map((tech) => {
        const { id, image, name } = tech;
        return (
          <div className="technology-item" key={id}>
            <img src={image} alt={`${image} logo`} />
            <p>{name}</p>
          </div>
        );
      })}
    </>
  );
};

export default TechnologyItem;

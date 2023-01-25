import React from "react";

const NavLink = ({ navigation }) => {
  return (
    <>
      {navigation.map((link) => {
        const { id, href, icon, name } = link;
        return (
          <a className="nav-link" href={href} key={id}>
            <i className={`${icon} menu-icon`}></i>
            <p>{name}</p>
          </a>
        );
      })}
    </>
  );
};

export default NavLink;

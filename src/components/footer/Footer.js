import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        Copyright &copy; Mihai Serbanescu
        <span id="date"> {new Date().getFullYear()}</span> All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;

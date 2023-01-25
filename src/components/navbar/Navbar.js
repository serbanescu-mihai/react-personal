const Navbar = () => {
  return (
    <nav className="navigation">
      <a className="nav-link" href="#header">
        <i className="fa-solid fa-house menu-icon"></i>
        <p>HOME</p>
      </a>

      <a className="nav-link" href="#projects">
        <i className="fa-solid fa-briefcase menu-icon"></i>
        <p>PROJECTS</p>
      </a>

      <a className="nav-link" href="#technology">
        <i className="fa-solid fa-microchip menu-icon"></i>
        <p>TECHNOLOGY</p>
      </a>

      <a className="nav-link" href="#contact">
        <i className="fa-solid fa-address-card menu-icon"></i>
        <p>CONTACT</p>
      </a>
    </nav>
  );
};

export default Navbar;

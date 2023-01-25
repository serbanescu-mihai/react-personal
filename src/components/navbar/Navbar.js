import { navigation } from "../../data/data";
import NavLink from "../navLink/NavLink";

const Navbar = () => {
  return (
    <nav className="navigation">
      <NavLink navigation={navigation}></NavLink>
    </nav>
  );
};

export default Navbar;

import { Link, NavLink } from "react-router-dom";
const Header = () => {
  const activeStyles = {
    fontWeight: "bold",
    //textDecoration: "underline",
}

  return (
    <header>
      <Link to="/" className="nav-logo">LOGO COMES HERE</Link>
      <nav>
        <NavLink
          to="/2"
          style={({isActive}) => isActive ? activeStyles : null}>
          TEST TO RECEIPE DETAIL
        </NavLink>
        <NavLink
         to="#"
         style={({isActive}) => isActive ? activeStyles : null}>
          ADD MORE
        </NavLink>      
      </nav>
    </header>
  );
};

export default Header
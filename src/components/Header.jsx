import { Link, NavLink } from "react-router-dom";
import logo from  '../assets/italianlogo.png';
const Header = () => {
  const activeStyles = {
    fontWeight: "bold",
    //textDecoration: "underline",
}

  return (
    <header>
      <Link to="/" className="nav-logo">
        <img src={logo} alt='logo' className='logo' />
      </Link>
      <nav>
    
        <NavLink
          to="/2"
          style={({isActive}) => isActive ? activeStyles : null}>
          Link #1
        </NavLink>

        <NavLink
         to="#"
         style={({isActive}) => isActive ? activeStyles : null}>
          Link #2
        </NavLink>

      </nav>
    </header>
  );
};

export default Header
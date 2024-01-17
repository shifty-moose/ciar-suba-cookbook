import { Link, NavLink } from "react-router-dom";
import logo from  '../assets/italianlogo.png';
import { useNavigate } from "react-router-dom";


const Header = ({navigateToHome}) => {

  return (
    <header>
      <Link 
        className="nav-logo"
        onClick={navigateToHome}>
        <img src={logo} alt='logo' className='logo' />
      </Link>
    </header>
  );
};

export default Header
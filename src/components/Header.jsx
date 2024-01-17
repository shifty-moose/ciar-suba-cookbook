import { Link, useNavigate } from "react-router-dom";
import logo from  '../assets/italianlogo.png';


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
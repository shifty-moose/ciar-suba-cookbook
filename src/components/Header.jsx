import { Link, NavLink } from "react-router-dom";
import logo from  '../assets/italianlogo.png';
import { useNavigate } from "react-router-dom";


const Header = () => {
  const navigate = useNavigate();

  const handleNavLogoClick = (event) => {
    event.preventDefault();
    
    const recipeSection = document.querySelector(".detail-section");
    recipeSection.setAttribute('style', 'opacity: 0; transition: opacity 0.4s;');

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      navigate(`/`);
    }, 400);
  }

  return (
    <header>
      <Link onClick={handleNavLogoClick} className="nav-logo">
        <img src={logo} alt='logo' className='logo' />
      </Link>
    </header>
  );
};

export default Header
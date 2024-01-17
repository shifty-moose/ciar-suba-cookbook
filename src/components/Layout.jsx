import Header from "./Header";
import Footer from "./Footer";
import { Outlet, useNavigate } from "react-router-dom";
import { useRef } from 'react';

const Layout = () => {

  const ref = useRef(null);
  const navigate = useNavigate();

  const navigateToHome = (event) => {
    event.preventDefault();
    ref.current.setAttribute('style', 'opacity: 0; transition: opacity 0.3s;');
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    navigate(`/`);
    ref.current.setAttribute('style', 'opacity: 1; transition: opacity 0.3s;');
  }

  return (
    <div>
      <Header
      navigateToHome={navigateToHome} />

      <main ref={ref}>
        <Outlet/>
      </main>

      <Footer />
    </div>
  )
}

export default Layout
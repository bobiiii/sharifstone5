import { useState, useEffect } from "react"

import NavMenu from "../components/navMenu";
import Logo from "../assets/images/logo.png";
import LogoFooter from "../assets/images/logo_footer.png";
import Footer from "../components/footer";
import "./Layout.css";
import SubscriptionNewsLetter from "../Screens/Home/Components/SubscriptionNewsLetter";
import { Link, useLocation } from 'react-router-dom'
import ScrollToTop from "../Navigation/scrollToTop";
function Layout({ children }) {
  const location = useLocation()

  const [scrollClass, setScrollClass] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / window.innerHeight) * 100;

      if (scrollPercentage >= 100) {
        setScrollClass("py-0");
      } else {
        setScrollClass("py-4");
      }
    };
    handleScroll()
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <ScrollToTop />
      <div className={`fixed lg:px-10  px-4 ${scrollClass} items-center flex w-full justify-between ${location.pathname === '/where-to-buy' ? '' : 'absolute'} z-50`}>
        <Link to='/'>
          {
            location.pathname === '/where-to-buy' ? <img className="h-12 fixed top-[16px]" src={LogoFooter} alt="LogoFooter" /> : <img src={Logo} alt="Logo" className="h-12 fixed" />
          }
        </Link>
        <NavMenu />
      </div>


      {children}

      <SubscriptionNewsLetter />
      <Footer />
    </div>
  );
}

export default Layout;

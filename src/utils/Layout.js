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
  return (
    <div>
      <ScrollToTop />
      <div className={`fixed lg:px-10  px-4 py-4 items-center flex w-full justify-between ${location.pathname === '/where-to-buy' ? '' : 'absolute'} z-50`}>
        <Link to='/'>
          {
            location.pathname === '/where-to-buy' ? <img className="h-12 fixed" src={LogoFooter} alt="LogoFooter" /> : <img src={Logo} alt="Logo" className="h-12 fixed" />
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

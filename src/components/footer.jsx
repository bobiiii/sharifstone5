import Logo from '../assets/images/logo_footer.png';
import { FaLocationDot } from 'react-icons/fa6';
import { FaPhone } from 'react-icons/fa6';
import BgImage from '../assets/images/bg_S.png';
import MaxWidthWrapper from '../Screens/MaxWidthWrapper';
import newmail from './newmail.png';
import './footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <footer className="lg:py-16  md:py-6 py-4   ">
        <MaxWidthWrapper className=" md:mt-0 mt-0">
          <div className="relative bg-white w-full xs:h-full   h-screen   flex flex-col sm:justify-between  justify-evenly sm:gap-16 gap-4">
            <img
              className="absolute right-0 bottom-0 "
              src={BgImage}
              alt={'alt'}
            />

            <div className="w-full">
              <img src={Logo} alt="" className="" />
            </div>

            <div className="w-full grid lg:grid-cols-4 grid-cols-2 sm:gap-16 gap-8 lg:justify-between justify-center ">
              <ul className="flex flex-col gap-6  ">
                <h4 className="text-[#2D2E2E] text-xl  font-semibold ">
                  Orlando
                </h4>
                <Link to={'https://g.co/kgs/LFBQ6D9'} className="flex gap-2 ">
                  <FaLocationDot className="text-[#EE2A2E] mt-1" size={20} />
                  <span className="py-0">
                    <p className="font-albert font-normal sm:text-base text-[12px] text-black">
                      2440 Dinneen Ave,
                    </p>
                    <p className="font-albert font-normal sm:text-base text-[12px] text-black">
                      Orlando, FL 32804
                    </p>
                    <p className="font-albert font-normal sm:text-base text-[12px] text-black"></p>
                  </span>
                </Link>
                <li className="flex gap-2 ">
                  <FaPhone className="text-[#EE2A2E] " size={20} />
                  <span className="py-0">
                    <p className="font-albert font-normal sm:text-base text-[12px] text-black">
                      (407) 286-4677
                    </p>
                  </span>
                </li>

                <li className="flex gap-1.5 ">
                  <img src={newmail} alt="" className="w-5 h-5  " />
                  <span className="py-0">
                    <p className="font-albert font-normal sm:text-base text-[12px] text-black whitespace-nowrap">
                      orlando@sharifstone.com
                    </p>
                  </span>
                </li>
              </ul>
              <ul className="flex flex-col gap-6">
                <h4 className="text-[#2D2E2E] text-xl  font-semibold ">
                  Tampa
                </h4>
                <Link to={'https://g.co/kgs/eHjaHyx'} className="flex gap-2">
                  <FaLocationDot className="text-[#EE2A2E] mt-1" size={20} />
                  <span className="py-0">
                    <p className="font-albert font-normal sm:text-base text-[12px] text-black">
                      8524 E. Adamo Dr,
                    </p>
                    <p className="font-albert font-normal sm:text-base text-[12px] text-black">
                      Tampa, FL 33619
                    </p>
                    <p className="font-albert font-normal sm:text-base text-[12px] text-black"></p>
                  </span>
                </Link>

                <li className="flex gap-1.5 ">
                  <FaPhone className="text-[#EE2A2E] " size={20} />
                  <span className="py-0">
                    <p className="font-albert font-normal sm:text-base text-[12px] text-black">
                      (813) 533-4553
                    </p>
                  </span>
                </li>

                <li className="flex  gap-2">
                  <img src={newmail} alt="" className="w-5 h-5  " />
                  <span className="py-0">
                    <p className="font-albert font-normal sm:text-base text-[12px] text-black whitespace-nowrap">
                      tampa@sharifstone.com
                    </p>
                  </span>
                </li>
              </ul>
              <ul className="flex flex-col gap-6">
                <h4 className="text-[#2D2E2E] text-xl  font-semibold ">
                  Company
                </h4>
                <li className="flex gap-3 ">
                  <Link
                    to="/about"
                    className="font-albert font-normal sm:text-base text-[12px]  text-black"
                  >
                    About Us
                  </Link>
                </li>
                <li className="flex gap-3 ">
                  <Link
                    to="/contact"
                    className="font-albert font-normal sm:text-base text-[12px] text-black"
                  >
                    Contact
                  </Link>
                </li>
                <li className="flex gap-3 ">
                  <Link
                    to="/warranty-n-support"
                    className="font-albert font-normal text-[12px] sm:text-base  text-black"
                  >
                    Warranty & Support
                  </Link>
                </li>
              </ul>
              <ul className="flex flex-col gap-6 ">
                <h4 className="text-[#2D2E2E] text-xl  font-semibold ">
                  Products
                </h4>
                <li className="flex gap-3 z-20">
                  <Link
                    to="/visualizer"
                    className="font-albert font-normal text-[12px] sm:text-base  text-black"
                  >
                    Kitchen
                  </Link>
                </li>
                <li className="flex gap-3 z-20 ">
                  <Link
                    to="/visualizer"
                    className="font-albert font-normal text-[12px] sm:text-base  text-black"
                  >
                    Bathroom
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex lg:flex-row flex-col lg:justify-between justify-center items-center lg:w-[85%] w-full lg:gap-0 gap-4">
              <div className="lg:hidden">
                <h3 className="font-albert  font-semibold text-lg">
                  {' '}
                  We are Social
                </h3>
              </div>

              <div className="flex  gap-4  flex-col items-center lg:order-2">
                <div className="lg:flex hidden">
                  <h3 className="font-albert  font-semibold text-2xl">
                    {' '}
                    We are Social{' '}
                  </h3>
                </div>
                <div className="flex gap-4">
                  <Link to={'https://web.facebook.com/4PowerQuartz'}>
                    <img
                      width="30"
                      height="30"
                      src="https://img.icons8.com/ios-glyphs/30/EE2A2E/facebook-new.png"
                      alt="facebook-new"
                    />
                  </Link>

                  <Link to={'https://www.instagram.com/sharifstones/'}>
                    <img
                      width="30"
                      height="30"
                      src="https://img.icons8.com/ios-glyphs/30/EE2A2E/instagram-new.png"
                      alt="instagram-new"
                    />
                  </Link>

                  <Link to={'/a'}>
                    <img
                      width="30"
                      height="30"
                      src="https://img.icons8.com/ios-glyphs/30/EE2A2E/twitterx--v2.png"
                      alt="twitterx--v2"
                    />
                  </Link>
                  <Link to="/a">
                    <img
                      width="30"
                      height="30"
                      src="https://img.icons8.com/ios-glyphs/30/EE2A2E/youtube-play.png"
                      alt="youtube-play"
                    />
                  </Link>
                </div>
              </div>

              <div className="lg:order-1 mt-6 ">
                <h4>Copyright @2023 Sharifstone</h4>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </footer>
    </>
  );
}

export default Footer;

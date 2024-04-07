import { useState, useEffect } from "react";
import "./navMenu.css";
import { Link } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import QuartzDropdown from "./quatzDropdown";
import useAuth from "../hooks/useAuth"

function NavMenu() {
  const { showDropdown, setShowDropdown } = useAuth()

  const [openMenu, setOpenMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showNewText] = useState(true);
  const [showNewTextKitchenVisualizer] = useState(true);

  const nav = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "Quartz Collection",
      route: "/quartz-collection",
    },
    {
      name: "Kitchen Visualizer",
      route: "/visualizer",
    },
    {
      name: "About the company",
      route: "/about",
    },
    {
      name: "Warranty and Support",
      route: "/warranty-n-support",
    },
    {
      name: "Contact",
      route: "/contact",
    },
    {
      name: "Blog",
      route: "/blog",
    },

    {
      name: "Live Inventory",
      route: "https://4power.stoneprofitsweb.com/",
    },
  ];

  const dashboard = [
    {
      name: "Create Collection",
      route: "/admin-dashboard/create-collection",
    },
    {
      name: "View Collections",
      route: "/admin-dashboard/collections",
    },
    {
      name: "Create Visualizer",
      route: "/admin-dashboard/create-visualizer",
    },
    {
      name: "View Visualizer",
      route: "/admin-dashboard/visualizer",
    },
  ];

  useEffect(() => {
    if (window.outerWidth <= 768 && isMobile === false) {


      setIsMobile(true);
    }

  }, []);


  useEffect(() => {
    openMenu ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset'
  }, [openMenu])

  return (
    <>
      <div onClick={() => setOpenMenu(true)} className=" bg-black w-12 h-12 rounded-full flex justify-center items-center xl:hidden ">
        <RiMenu3Fill size={30} color={"white"} />
      </div>

      {openMenu && (
        <div className="mobile-menu-container h-dvh px-2 z-50">
          <div className="mobile-remove-menu">
            <RxCross2
              onClick={() => setOpenMenu(false)}
              color={"#fff"}
              size={30}
            />
          </div>
          <div className="flex flex-col items-center justify-evenly h-[80%]  text-white  ">
            <Link
              to={"/"}
              onClick={() => setOpenMenu(false)}
              className=""
            >
              Home
            </Link>
            <Link
              to={"/quartz-collection"}
              onClick={() => setOpenMenu(false)}
              className=""
            >
              Quartz Collection
            </Link>

            <Link
              to={"/visualizer"}
              onClick={() => setOpenMenu(false)}
              className=""
            >
              {showNewTextKitchenVisualizer && <span className="new-text">NEW </span>}
              Kitchen Visualizer
            </Link>

            <Link
              to={"/about"}
              onClick={() => setOpenMenu(false)}
              className=""
            >
              About the company
            </Link>
            <Link
              to={"/warranty-n-support"}
              onClick={() => setOpenMenu(false)}
              className=""
            >
              Warranty and Support
            </Link>


            <Link
              to={"/contact"}
              onClick={() => setOpenMenu(false)}
              className=""
            >
              Contact Us
            </Link>
            <Link
              to={"/blog"}
              onClick={() => setOpenMenu(false)}
              className=""
            >
              Blog
            </Link>
            <Link
              to={"https://4power.stoneprofitsweb.com/"}
              onClick={() => setOpenMenu(false)}
              className=""
            >
              {showNewText && <span className="new-text">NEW </span>}
              Live Inventory
            </Link>



          </div>
        </div>
      )}
      <div className="relatiive  py-2 xl:flex items-center justify-between hidden ">
        {window.location.pathname.includes("/admin-dashboard") ? (
          <div className="nav-container">
            {dashboard.map((v, i) => (
              <Link to={v.route} className="nav-item" key={i}>
                <div
                  className="active-dott"
                  style={{
                    visibility:
                      window.location.pathname === v.route ? "" : "hidden",
                  }}
                />
                {v.name}
              </Link>
            ))}
          </div>
        ) : (
          <div className="nav-container ">
            {nav.map((v, i) => (
              <Link
                key={i}
                to={v.route}
                className="nav-item"
                onMouseOver={
                  v.name === "Quartz Collection"
                    ? () => setShowDropdown(true)
                    : () => setShowDropdown(false)
                }
              >
                <div
                  className="active-dott"
                  style={{
                    visibility:
                      window.location.pathname === v.route ? "" : "hidden",
                  }}
                />
                {v.name === "Kitchen Visualizer" || v.name === "Live Inventory" ? (
                  <span className="new-text">
                    {showNewTextKitchenVisualizer && "NEW "}
                  </span>
                ) : null}
                {v.name}
              </Link>
            ))}


          </div>
        )}
      </div>


      {showDropdown && <QuartzDropdown />}
    </>
  );
}

export default NavMenu;

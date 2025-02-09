import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Hamburger from "hamburger-react";
import Menu from "../Menu/Menu";
import MenuLinks from "../menulinks/menuLinks";
import AppleIcon from "/src/assets/img/icons8-fruits-flaticons.png";
import ProfileImg from "/src/assets/img/avatar.png";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    setSize(window.innerWidth);
  }, []);

  console.log(size);

  return (
    <>
      <nav className="navbar w-screen">
        <div className="flex flex-row justify-between m-4">
          <div>
            <Link to="/" className="flex flex-row">
              <img
                src={AppleIcon}
                alt="Company logo of an apple and orange"
                className="w-12 h-12"
              />
              <h2 className="font-bold text-4xl text-orangeRed">DEAL</h2>
            </Link>
          </div>
          <div className="flex">
            <div className="navbar-med flex align-middle">
              <MenuLinks />
            </div>
            <div className="px-2">
              <Link to="/profile">
                <img
                  src={ProfileImg}
                  alt="profile image"
                  className="w-12 h-12"
                />
              </Link>
            </div>
            <div className="navbar-hamburger">
              <Hamburger
                toggled={isOpen}
                toggle={setOpen}
                color="#087E8B"
                label="Show menu"
              />
            </div>
            <Menu open={!isOpen} setOpen={setOpen} className="z-10" />
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};
export default Navbar;

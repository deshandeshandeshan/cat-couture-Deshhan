import { NavLink } from "react-router-dom";
import LoginButton from "./LoginButton";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header className={`header section-padding`}>
        <h1 className="logo padding">Cat Couture</h1>
      </header>
      <header>
        <nav className={`nav page-padding`}>
          <ul className="navLinks">
            <li className="navLinkItems">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? `link activeLink` : `link`
                }
              >
                Products
              </NavLink>
            </li>
            <li className="navLinkItems">
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive ? `link activeLink` : `link`
                }
              >
                Dashboard
              </NavLink>
            </li>
            <li className={`navButton navLinkItems`}>
              <LoginButton />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;

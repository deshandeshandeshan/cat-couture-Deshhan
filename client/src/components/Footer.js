import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className={`footer main-content`}>
      <p className="footerItem floatLeft">Copyright Placeholder</p>
      <div className="footer-right-align">
        <Link to="/" className="footerItem">
          Terms of use
        </Link>
        <Link to="/" className="footerItem paddingLeft">
          Privacy policy
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

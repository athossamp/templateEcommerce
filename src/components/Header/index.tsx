import { Link } from "react-router-dom";
import "./Header.css";
import Navbar from "./Navbar";

function Header() {
  return (
    <header>
      <div className="header-black">
        <h4>
          Mon-Thu: <span>9:00 AM - 5:30 PM</span>
        </h4>
        <h4>
          Visit our showroom in 1234 Street Address City Address <a href="#">Contact Us</a>
        </h4>
        <h4>
          <span>Call Us:(00) 1234 5678</span> <img src="icons/facebook.svg" /> <img src="icons/instagram.svg" alt="" />
        </h4>
      </div>
      <div className="header-white">
        <div className="header-text">
          <Link to="/">
            <img src="images/logo.png" />
          </Link>
          <ul>
            <Navbar />
            <div className="header-button">
              <li>Our Deals</li>
            </div>
          </ul>
        </div>
        <div className="icons">
          <img src="icons/magnifier.svg" alt="magnifier for search" />
          <img src="icons/cart-shop.svg" alt="cart shop" />

          <img src="images/avatar.png" className="avatar" />
        </div>
      </div>
    </header>
  );
}

export default Header;

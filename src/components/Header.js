import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div>
           <nav className="navbar navbar-light bg-light">
              <Link to="/" className="navbar-brand">OnlineShop</Link>
              <Link to="/card" className="btn btn-secondary btn-lg">
              <i className="fas fa-shopping-cart"></i>
              </Link>
            </nav>
        </div>
    )
}

export default Header;

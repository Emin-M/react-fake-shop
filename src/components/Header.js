import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div>
           <nav className="navbar navbar-light bg-light">
              <Link to="/" className="navbar-brand">OnlineShop</Link>
              <Link to="card" className="btn btn-secondary btn-lg">
              <button>Card</button>
              </Link>
            </nav>
        </div>
    )
}

export default Header;

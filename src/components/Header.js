import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
    const card = useSelector(state => state.card)

    return (
        <div>
           <nav className="navbar navbar-light bg-light">
              <Link to="/" className="navbar-brand">OnlineShop</Link>
              <Link to="/card" className="btn btn-secondary btn-lg">
              <i className="fas fa-shopping-cart"></i>
              </Link>
              <Link to="/card"><span>{card.card.length}</span></Link>
            </nav>
        </div>
    )
}

export default Header;

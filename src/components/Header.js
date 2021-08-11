import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchItems, filterToHigh, filterToLower } from "../actions";

const Header = ({ filterToHigh, filterToLower, fetchItems }) => {
    const card = useSelector(state => state.card)
    const [option, setOption] = useState("");
    
    useEffect(() => {
        if(option === "none") fetchItems()
        if(option === "tohigher") filterToHigh()
        if(option === "tolower") filterToLower()
        return () => {
            setOption()
        }
    }, [option])

    return (
        <div>
           <nav className="navbar navbar-light bg-light">
              <Link to="/" className="navbar-brand">OnlineShop</Link>
              <Link to="/card" className="btn btn-secondary btn-lg">
              <i className="fas fa-shopping-cart"></i>
              </Link>
              <Link to="/card"><span>{card.card.length}</span></Link>
              <select onChange={e => setOption(e.target.value)} id="cars">
                 <option value="none">none</option>
                 <option value="tohigher">lower to high</option>
                 <option value="tolower">high to lower</option>
             </select>
            </nav>
        </div>
    )
}

export default connect(null, { filterToHigh, filterToLower, fetchItems })(Header);

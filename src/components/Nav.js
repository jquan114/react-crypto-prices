import React from "react"
import {Link} from "react-router-dom"
 
const Nav = (props) => {
    return (
        <div className="nav">
            <Link to="/">
                <div>crypto prices</div>
            </Link>
            <Link to="/currencies">
                <div>currencies</div>
            </Link>
        </div>
    );
};
export default Nav;
import React from "react";
import { Link } from "react-router-dom";

function Navegator() {
    return(
        <nav className="links">
            <Link to={"/"}>Home</Link>
            <Link to={'/news'}>News</Link>
        </nav>
    )
}

export default Navegator;
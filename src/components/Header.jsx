import React from "react";
import logo from '../assets/logo.png'

function Header() {
    return(
        <>
            <header>
                <h1>
                    Global News React
                </h1>
                <img src={logo} alt="GNR logo" />
            </header>
        </>
    )
}

export default Header;
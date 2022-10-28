import React from "react"

function Header(){
    return(
        <header className="header">
        <nav className="nav">
            <img src="./react-logo.png" />
            <ul className="nav-item">
                <li>Pricing</li>
                <li>about</li>
                <li>contact</li>
            </ul>
        </nav>
    </header>
    )
}
export default Header
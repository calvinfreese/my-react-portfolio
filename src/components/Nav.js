import React from 'react';

function Nav() {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div>
            <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarLinks">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a> 
            </div>
            <div id="navbarLinks" className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item" href="/">
                        Portfolio
                    </a>
                    <a className="navbar-item" href="/about">
                        About
                    </a>
                    <a className="navbar-item" href="/contact">
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Nav;
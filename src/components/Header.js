import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    const [activeStatus, setStatus] = useState(false);
    return (
        <nav className="navbar is-info" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
            <a class="navbar-item" href="my-react-portfolio/">
            <figure className="image is-32x32">
                <img  className="is-rounded" src="/Assets/Images/logo.png" alt="logo" />
            </figure>
             
            </a>
            
                <a onClick={()=>{setStatus(!activeStatus)}} role="button" className={`navbar-burger burger ${activeStatus ? "is-active" : ""}`} aria-label="menu" aria-expanded="false" data-target="navbarLinks">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a> 
            </div>
            
            <div id="navbarLinks" className={`navbar-menu ${activeStatus ? "is-active" : ""}`}>
                <div className="navbar-start">
                    <NavLink exact  className="navbar-item" to="my-react-portfolio/">
                        Portfolio
                    </NavLink>
                    <NavLink exact  className="navbar-item" to="my-react-portfolio/about">
                        About
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Header;
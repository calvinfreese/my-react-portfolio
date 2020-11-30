import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    const [activeStatus, setStatus] = useState(false);
    return (
        <nav className="navbar is-info" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
            <NavLink class="navbar-item" to="/">
                <figure className="image is-32x32">
                    <img  className="is-rounded" src="./images/logo.png" alt="logo" />
                </figure>
            </NavLink>
             
           
            
                <a onClick={()=>{setStatus(!activeStatus)}} role="button" className={`navbar-burger burger ${activeStatus ? "is-active" : ""}`} aria-label="menu" aria-expanded="false" data-target="navbarLinks">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a> 
            </div>
            
            <div id="navbarLinks" className={`navbar-menu ${activeStatus ? "is-active" : ""}`}>
                <div className="navbar-start">
                    <NavLink exact  className="navbar-item" to="/">
                        Portfolio
                    </NavLink>
                    <NavLink exact  className="navbar-item" to="/about">
                        About
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Header;
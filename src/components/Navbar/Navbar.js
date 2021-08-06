import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.scss";

//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faStreetView,faProcedures,faBalanceScaleLeft,faTimes,faBars } from '@fortawesome/free-solid-svg-icons'

export const Navbar = () => {

    const [menuOpen,setMenuOpen] = useState(false);


    return (
        <header>
            <div className="container header-container flex">
                <div className="brand-icon">
                    <Link to="/">
                        <FontAwesomeIcon icon={faBalanceScaleLeft} /> BRAND
                    </Link>
                </div>
                <nav className="flex">
                    <div className="navbar-icon" onClick={()=>{setMenuOpen(!menuOpen)}}>
                        {menuOpen ?<FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
                    </div>
                    <div className={menuOpen ? `navbar-container navbar-container-open`:`navbar-container`}>
                        <ul>
                            <li>
                                <Link to="/">
                                    <FontAwesomeIcon icon={faHome} /> Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <FontAwesomeIcon icon={faProcedures} /> Service
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <FontAwesomeIcon icon={faStreetView} /> Product
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
        
    ) 
}

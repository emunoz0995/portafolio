import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {

    return (
        <div className='Navbar'>
             <div className="nav-container">
                <Link to={'/'}className="nav-item">
                    <i className="fa-solid fa-house">
                        <p>Home</p>
                    </i>
                </Link>
                <Link to={'/about'} className="nav-item">
                    <i className="fa-solid fa-address-card">
                        <p>About me</p>
                    </i>
                </Link>
                <Link to={'/skills'} className="nav-item">
                    <i className="fa-solid fa-brain">
                        <p>Skills</p>
                    </i>
                </Link>
                <Link to={'/portafolio'} className="nav-item">
                    <i className="fa-solid fa-book-atlas">
                        <p>Portafolio</p>
                    </i>
                </Link>
                <Link to={'/contact'} className="nav-item">
                    <i className="fa-solid fa-phone">
                        <p>Contact me!</p>
                    </i>
                </Link>
                
            </div> 
            
        </div >
    );
};

export default Navbar;
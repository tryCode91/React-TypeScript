import React from 'react';

import "../App.css";

import {Link} from 'react-router-dom'

const NavBar: React.FC = () => {

    return(
        <React.Fragment>
            <nav className='navbar navbar-dark bg-success shadows-1-strong navbar-expand-lg' >
                <div className="container">
                    <Link to={'/'} className='navbar-brand'>Petrus Dughem</Link>
                   
                    <div className="collapse.navbar-collapse ">
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                <Link to={'/Home'} className='nav-link'>Home</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to={'/Invite'} className='nav-link'>Party</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to={'/About'} className='nav-link'>About</Link>
                            </li>  
                            <li className='nav-item'>
                                <Link to={'/'} className='nav-link'>Stuff</Link>
                            </li>  
                            <li className='nav-item'>
                                <Link to={'/'} className='nav-link'>Email</Link>
                            </li>  
                            <li className='nav-item'>
                                <Link to={'/'} className='nav-link'>Contact</Link>
                            </li>    
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )

}
export default NavBar;
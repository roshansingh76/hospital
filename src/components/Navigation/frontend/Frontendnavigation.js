
import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../../config/routes';

const Fnavigation = () => (
		<Mainnav/>		
		
);
const Mainnav=()=>(
    <header id="header" className="header header-main educare-header navbar-main">
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark sticky-top custom-larg">
            <div className="container">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <ul className="unstyled  d-sm-none d-md-none d-lg-none d-xl-none">
                    <li><a href="sign-in.html">Login</a></li>
                    <li><a href="register.html">Register</a></li>
                    <li className="nav-item dropdown">
                        <a  href="#" id="navbardrop" data-toggle="dropdown">
                        Susil <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg" width="30" class="rounded-circle z-depth-0" alt="avatar image" />  
                        </a>
                        <div className="dropdown-menu dropdown-menu-lin">
                            <a className="dropdown-item" href="#">Profile</a>
                            <a className="dropdown-item" href="#">Logout</a>
                        </div>
                    </li>
                </ul>
              <div className="collapse navbar-collapse " id="collapsibleNavbar">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active"><Link to={ROUTES.Home} className="nav-link">Home</Link></li>
                    <li className="nav-item "><Link to={ROUTES.Talkastrologer} className="nav-link">Prediction</Link></li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                        Services
                        </a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Career</a>
                            <a className="dropdown-item" href="#">Love & Relationship</a>
                            <a className="dropdown-item" href="#">Health</a>
                        </div>
                    </li>
                    <li className="nav-item"><Link to={ROUTES.About} className="nav-link">About</Link></li>
                    <li className="nav-item"><Link to={ROUTES.Horoscopesdefault+'/aries'} className="nav-link">Horoscope</Link></li>
                </ul>
              </div> 
               <ul className="unstyled d-none d-sm-block">
                    <li><a href="sign-in.html">Login</a></li>
                    <li><a href="register.html">Register</a></li>
                    <li className="nav-item dropdown">
                        <a  href="#" id="navbardrop" data-toggle="dropdown">
                        Susil <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg" width="30" class="rounded-circle z-depth-0" alt="avatar image" />  
                        </a>
                        <div className="dropdown-menu dropdown-menu-lin">
                            <a className="dropdown-item" href="#">Profile</a>
                            <a className="dropdown-item" href="#">Logout</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </header>

)

export default Fnavigation;
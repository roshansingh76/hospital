
import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../../config/routes';

const Fnavigation = () => (
		<Mainnav/>		
		
);
const Mainnav=()=>(
    <header id="header" className="header header-main educare-header navbar-main">
    {/*<div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="educare-header-wrapper">
                    <div className="nav-wrap clearfix">
                        <nav id="mainnav" className="mainnav">
                            <ul className="menu">
                                <li className="active"><Link to={ROUTES.Home}>Home</Link></li>
                                <li><Link to={ROUTES.Talkastrologer}>Prediction</Link></li>
                                <li><a href="muhurat-list.html">Services</a>
                                    <ul className="submenu">
                                        <li><a href="muhurat-list.html">Career</a></li>
                                        <li><a href="muhurat-list.html">Love & Relationship</a></li>
                                        <li><a href="muhurat-list.html">Health</a></li>
                                    </ul>
                                </li>
                                <li><Link to={ROUTES.About}>About</Link></li>
								 <li><Link to={ROUTES.Horoscope}>Horoscopes</Link></li>
								 <li><Link to={ROUTES.Blogs}>Blog</Link></li>
                                <li><a href="online-puja.html">Online Puja</a></li>
                            </ul>
                        </nav>
                        <div className="educare-search">
                            <form action="#" id="searchform-all" method="get">
                                <div>
                                    <input type="text" id="input-search" className="sss" placeholder="Search..."/>
                                    <input type="submit" id="searchsubmit"/>
                                </div>
                            </form>
                        </div>
                      
                    <div> <a className="toggle"><span></span></a></div>
                   </div>
                 </div>
            </div>
        </div>
    </div>*/}
<nav className="navbar navbar-expand-lg bg-dark navbar-dark sticky-top">
    <div className="container">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">
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
      </div>
</nav>
</header>

)

export default Fnavigation;
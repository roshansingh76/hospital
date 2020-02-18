
import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../../config/routes';

const Fnavigation = () => (
		<Mainnav/>		
		
);
const Mainnav=()=>(
    <header id="header" className="header header-main educare-header navbar-main">
    <div className="container">
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
                                <li><a href="about.html">About</a></li>
                                <li><a href="blog.html">Blog</a></li>
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
    </div>
</header>
)

export default Fnavigation;
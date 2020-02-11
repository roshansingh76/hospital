import React from 'react';
import { BrowserRouter as Router, Route,Link} from 'react-router-dom';
import Logox from '../../assets/img/logo.png';
import Logosmall from '../../assets/img/logo-small.png';
import avatar01 from '../../assets/img/profiles/avatar-01.jpg';
import * as ROUTES from '../../config/routes';

const Sidebar=()=>(
		<div className="sidebar" id="sidebar">
		   <div className="sidebar-inner slimscroll">
			  <div id="sidebar-menu" className="sidebar-menu">
				 <ul>
					<li className="menu-title"> 
					   <span>Main</span>
					</li>
					<li className="active"> 
					   <Link to={ROUTES.AdminDashboard}><i className="fe fe-home"></i> <span>Dashboard</span></Link>
					</li>
					<li> 
					
					   <Link to={ROUTES.Astrologer}><i className="fe fe-user"></i> <span>Astrologer</span></Link>
					</li>
				  
					<li> 
					   <Link to={ROUTES.Setting}><i className="fe fe-vector"></i> <span>Settings</span></Link>
					</li>
				  
					
				  
				 </ul>
			  </div>
		   </div>
	 </div>

);

export default Sidebar;
import React from 'react';
import { Link } from 'react-router-dom';
import Logox from '../../assets/logo.png';
import Logosmall from '../../assets/white.png';
import avatar01 from '../../assets/img/profiles/avatar-01.jpg';
import Sidebar from './Sidebar';
const Navigation = () => (
		<Header/>		
		
);


const Header=()=>(
		<div className="header">
			    <div className="header-left">
                    <Link to="#" className="logo">
						<img src={Logox} alt="Logo"/>
					</Link>
					<Link to="#" className="logo logo-small">
						<img src={Logosmall} alt="Logo" width="30" height="30"/>
					</Link>
                </div>
				<Link to="javascript:void(0);" id="toggle_btn">
					<i className="fe fe-text-align-left"></i>
				</Link>
				<div className="top-nav-search">
						<form>
							<input type="text" className="form-control" placeholder="Search here"/>
							<button className="btn" type="submit"><i className="fa fa-search"></i></button>
						</form>
				</div>
				<Link to="#" className="mobile_btn" id="mobile_btn">
					<i className="fa fa-bars"></i>
				</Link>
				<ul className="nav user-menu">
				  <li className="nav-item dropdown noti-dropdown">
						<Link to="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
							<i className="fe fe-bell"></i> <span className="badge badge-pill">3</span>
						</Link>
						<div className="dropdown-menu notifications">
							<div className="topnav-dropdown-header">
								<span className="notification-title">Notifications</span>
								<Link to="javascript:void(0)" className="clear-noti"> Clear All </Link>
							</div>
							<div className="noti-content">
								<ul className="notification-list">
									<li className="notification-message">
										<Link to="#">
											<div className="media">
												<span className="avatar avatar-sm">
													<img className="avatar-img rounded-circle" alt="User Image" src={avatar01}/>
												</span>
												<div className="media-body">
													<p className="noti-details"><span className="noti-title">Dr. Ruby Perrin</span> Schedule <span className="noti-title">her appointment</span></p>
													<p className="noti-time"><span className="notification-time">4 mins ago</span></p>
												</div>
											</div>
										</Link>
									</li>
								</ul>
							</div>
							<div className="topnav-dropdown-footer">
								<Link to="#">View all Notifications</Link>
							</div>
						</div>
					</li>
					<li className="nav-item dropdown has-arrow">
						<Link to="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
							<span className="user-img"><img className="rounded-circle" src={avatar01} width="31" alt="Ryan Taylor"/></span>
						</Link>
						<div className="dropdown-menu">
							<div className="user-header">
								<div className="avatar avatar-sm">
									<img src={avatar01} alt="User Image" className="avatar-img rounded-circle"/>
								</div>
								<div className="user-text">
									<h6>Ryan Taylor</h6>
									<p className="text-muted mb-0">Administrator</p>
								</div>
							</div>
							<Link className="dropdown-item" to="#">My Profile</Link>
							<Link className="dropdown-item" to="#">Settings</Link>
							<Link className="dropdown-item" to="#">Logout</Link>
						</div>
					</li>
					
				</ul>
			</div>
		
);
export default Navigation;
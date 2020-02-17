import React from 'react';
import { BrowserRouter as Router, Route,Redirect,withRouter,useHistory } from 'react-router-dom';
import * as ROUTES from '../../config/routes';
import Navigation from '../Navigation';
import Sidebar from '../Navigation/Sidebar';
import FrontendTopbar from '../Navigation/frontend/nav';
import FrontendHeader from '../Navigation/frontend/FrontendHeader';
import FrontendNavigation from '../Navigation/frontend/Frontendnavigation';
import Footer from '../Navigation/frontend/Mainfooter';
import HomePage from '../Home';
import LoginPage from '../Login'
import AdminDashboard from '../AdminDashboard'
import AstrologerPage from '../Astrologer'
import CreateAstro from '../Astrologer/create'
import SettingPage from '../Setting'
import deviceStorage from '../../config/deviceStorage';

const App= (props) => {
	const isAuthenticated = localStorage.getItem('token');
	const isPrivilage = localStorage.getItem('isPrivilage');
	const location= window.location.pathname;
	console.log();
	if(isAuthenticated && isPrivilage==='Admin'){
	return (
		<div className="main-wrapper" >
		 <Router>
		   <Navigation />	
		   <Sidebar />	
		   		<Route   path={ROUTES.AdminDashboard} component={AdminDashboard} />
				<Route   path={ROUTES.Astrologer} component={AstrologerPage} />
				<Route   path={ROUTES.addAstrologer} component={CreateAstro} />
				<Route   path={ROUTES.Setting} component={SettingPage} />
		 </Router>
	 </div>
	);
  
  }else if(location==='/adminlogin' && !isAuthenticated){
	  return (
		<div className="main-wrapper" >
		 <Router>
			<Redirect to={ROUTES.ADMIN_LOGIN_IN}/>
			<Route   path={ROUTES.ADMIN_LOGIN_IN} component={LoginPage} />	
		 </Router>
	  </div>)
  }else{
	  return (
		<div className="main-wrapper" >
		 <Router>
		 <div className="educare-header-section top-bar jy-header "> 
			<FrontendTopbar/>
			<FrontendHeader/>
			<FrontendNavigation/>
		 </div>
			<Redirect to={ROUTES.Home}/>
			<Route   path={ROUTES.Home} component={HomePage} />	
			<Footer/>
		 </Router>
	  </div>)
  }
}

export default App;

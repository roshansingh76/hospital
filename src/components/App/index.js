import React from 'react';
import { BrowserRouter as Router, Route,Redirect  } from 'react-router-dom';
import * as ROUTES from '../../config/routes';
import Navigation from '../Navigation';
import Sidebar from '../Navigation/Sidebar';
import HomePage from '../Home';
import LoginPage from '../Login'
import AdminDashboard from '../AdminDashboard'
import AstrologerPage from '../Astrologer'
import CreateAstro from '../Astrologer/create'
import SettingPage from '../Setting'
import deviceStorage from '../../config/deviceStorage';
function App(props) {	
	const isAuthenticated = localStorage.getItem('token');
	if(isAuthenticated){
	return (
		<div className="main-wrapper" >
		 <Router>
		   <Navigation />	
		   <Sidebar />	
				<Route exact  path={ROUTES.Home} component={HomePage} />
				<Route   path={ROUTES.AdminDashboard} component={AdminDashboard} />
				<Route   path={ROUTES.Astrologer} component={AstrologerPage} />
				<Route   path={ROUTES.addAstrologer} component={CreateAstro} />
				<Route   path={ROUTES.Setting} component={SettingPage} />
		 </Router>
	 </div>
	);
  
  }else{
	  return (
		<div className="main-wrapper" >
		 <Router>
			<Redirect to={ROUTES.ADMIN_LOGIN_IN}/>
			<Route   path={ROUTES.ADMIN_LOGIN_IN} component={LoginPage} />	
		 </Router>
	  </div>)
  }
}

export default App;

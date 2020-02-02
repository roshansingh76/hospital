import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import * as ROUTES from '../../config/routes';
import Navigation from '../Navigation';
import Sidebar from '../Navigation/Sidebar';
import HomePage from '../Home';
import LoginPage from '../Login'
function App() {
  return (
	 <div className="main-wrapper">
		 <Router>
			 <Route exact  path={ROUTES.LOGIN} component={LoginPage} />
			 
		 </Router>
	 </div>
  );
}

export default App;

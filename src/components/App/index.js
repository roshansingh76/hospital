import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  withRouter,
  useHistory,
  Switch
} from "react-router-dom";
import deviceStorage from "../../config/deviceStorage";
import * as ROUTES from "../../config/routes";
import Navigation from "../Navigation";
import Sidebar from "../Navigation/Sidebar";
import FrontendTopbar from "../Navigation/frontend/nav";
import FrontendHeader from "../Navigation/frontend/FrontendHeader";
import FrontendNavigation from "../Navigation/frontend/Frontendnavigation";
import Footer from "../Navigation/frontend/Mainfooter";
import HomePage from "../Home";
import LoginPage from "../Login";
import AdminDashboard from "../AdminDashboard";
import AstrologerPage from "../Astrologer";
import CreateAstro from "../Astrologer/create";
import SettingPage from "../Setting";
import Talkastrologer from "../Talkastrologer";
import Talkastrologerdetail from "../Talkastrologer/detail";
import Muhurat from "../Muhurat";
import Vastu from "../Vastu";
import Kundli from "../Kundli";
import Horoscope from "../Horoscope";
import Chat from "../communication/chat";
import Call from "../communication/call";
import Report from "../communication/report";
import About from "../About";
import Blogs from "../Blogs";
import Callingpack from "../Pack/callpacking";
import MuhuratDeatil from "../Muhurat/muhuratsingle";
import VastuDetail from "../Vastu/vastusingle";
import KundliDetail from "../Kundli/kundlisingle";

import UserAccountPage from "../Users";

const App = props => {
  const isAuthenticated = localStorage.getItem("token");
  const isPrivilage = localStorage.getItem("isPrivilage");
  const location = window.location.pathname;
  console.log();
  if (isAuthenticated && isPrivilage === "Admin") {
    return (
      <div className="main-wrapper">
        <Router>
          <Navigation />
          <Sidebar />
          <Route path={ROUTES.AdminDashboard} component={AdminDashboard} />
          <Route path={ROUTES.Astrologer} component={AstrologerPage} />
          <Route path={ROUTES.addAstrologer} component={CreateAstro} />
          <Route path={ROUTES.Setting} component={SettingPage} />
        </Router>
      </div>
    );
  } else if (location === "/adminlogin" && !isAuthenticated) {
    return (
      <div className="main-wrapper">
        <Router>
          <Redirect to={ROUTES.ADMIN_LOGIN_IN} />
          <Route path={ROUTES.ADMIN_LOGIN_IN} component={LoginPage} />
        </Router>
      </div>
    );
  } else {
    return (
      <div className="main-wrapper">
        <Router>
          <div className="educare-header-section top-bar jy-header ">
            <FrontendTopbar {...props} />
            <FrontendHeader {...props} />
            <FrontendNavigation {...props} />
          </div>
          <Route exact path={ROUTES.Home} component={HomePage} />

          <Route path={ROUTES.Talkastrologer} component={Talkastrologer} />
          <Route path={ROUTES.Astrodetails} component={Talkastrologerdetail} />
          <Route path={ROUTES.Callingpack} component={Callingpack} />
          <Route path={ROUTES.Chat} component={Chat} />
          <Route path={ROUTES.Call} component={Call} />
          <Route path={ROUTES.Report} component={Report} />
          <Route path={ROUTES.About} component={About} />
          <Route path={ROUTES.Blogs} component={Blogs} />
          <Switch>
            <Route path={ROUTES.Vastudetals} component={VastuDetail} />
            <Route path={ROUTES.Muhuratdetails} component={MuhuratDeatil} />
            <Route path={ROUTES.Kundlidetails} component={KundliDetail} />

            <Route path={ROUTES.VastuList} component={Vastu} />
            <Route path={ROUTES.MuhuratList} component={Muhurat} />
            <Route path={ROUTES.KundliList} component={Kundli} />
          </Switch>
          <Route path={ROUTES.Horoscopes + "/:slug"} component={Horoscope} />

          <Route path={ROUTES.Horoscopes} component={Horoscope} />
          <Route path={ROUTES.UserAccount} component={UserAccountPage} />

          <Footer {...props} />
        </Router>
      </div>
    );
  }
};

export default App;

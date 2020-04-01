import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/astro/images/logo.png';
import * as ROUTES from '../../../config/routes';
const FrontendHeader = () => (
		<Fheader/>		
		
);
const Fheader=()=>(
	<div className="header educare-info-header clearfix">
   		<div className="container">
				<div className="header-wrap clearfix">
					<div className="row">
						<div className="col-lg-3">
							<div id="logo" className="logo"> 
                            <Link to={ROUTES.Home} rel="home">
                                 <img src={logo} alt="image"/>
                            </Link>
                            </div>
						</div>
						<div className="col-lg-9 d-none d-sm-none d-md-block d-lg-block d-xl-block">
							<div className="wrap-educare-info-header clearfix">
								<aside className="educare-info educare-info-section">
									<div className="btn-click"> <a href="#" className="flat-button"></a> </div>
								</aside>
								<aside className="educare-info educare-info-section">
									<div className="texteducare-info clearfix">
									<div className="info-icon"> <i className="fa fa-map-marker"></i> </div>
									<div className="info-text">
									<p>+91 7703881443 </p>
									<p><span>Helpline No</span></p>
									</div>
									</div>
								</aside>
								<aside className="educare-info educare-info-section">
									<div className="texteducare-info clearfix">
										<div className="info-icon"> <i className="fa fa-comments"></i> </div>
										<div className="info-text">
											<p><Link to={ROUTES.Talkastrologer}>Chat With Astrologer</Link></p>
										</div>
									</div>
								</aside>
								<aside className="educare-info educare-info-section">
									<div className="texteducare-info clearfix">
										<div className="info-icon"> <i className="fa fa-phone"></i> </div>
										<div className="info-text">
											<p><Link to={ROUTES.Talkastrologer}>Consult With Astrologer  </Link></p>
										</div>
									</div>
								</aside>
							</div>
						</div>
					</div>
				</div>
			</div>
	</div>
)

export default FrontendHeader;
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/astro/images/logo.png';
const FrontendHeader = () => (
		<Fheader/>		
		
);
const Fheader=()=>(
    <div classNameName="header educare-info-header clearfix">
			<div className="container">
				<div className="header-wrap clearfix">
					<div className="row">
						<div className="col-lg-3">
							<div id="logo" className="logo"> 
                            <a href="index.html" rel="home">
                                 <img src={logo} alt="image"/>
                            </a> 
                            </div>
						</div>
						<div className="col-lg-9 hidden-xs">
							<div className="wrap-educare-info-header clearfix">
								<aside className="educare-info educare-info-section">
									<div className="btn-click"> <a href="#" className="flat-button"></a> </div>
								</aside>
								<aside className="educare-info educare-info-section">
									<div className="texteducare-info clearfix">
									<div className="info-icon"> <i className="fa fa-map-marker"></i> </div>
									<div className="info-text">
									<h6>925-P , Sector 51 </h6>
									<p>Gurugram, Haryana - 122001</p>
									</div>
									</div>
								</aside>
								<aside className="educare-info educare-info-section">
									<div className="texteducare-info clearfix">
										<div className="info-icon"> <i className="fa fa-phone"></i> </div>
										<div className="info-text">
											<h6>+91 7703 881 443</h6>
											<p>info@Jyotirvid.in</p>
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
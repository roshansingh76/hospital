import React from 'react';
import { Link } from 'react-router-dom';

const HomeService_top = () => (
		<Hservice_top/>		
		
);

const Hservice_top=()=>(
    <section className="padding section-bg-1">
		<div className="container">
			<div className="row">
				<div className="col-sm-1 col-lg-2"></div>
				<div className="col-xs-12 col-sm-10 col-lg-8 text-center">
				  <h2 className="text-uppercase text-uppercase-col">How <span className="color_red">It Works</span></h2>
				  <div className="line_1-1"></div>
				  <div className="line_2-2"></div>
				  <div className="line_3-3"></div>
				</div>
				<div className="col-sm-1 col-lg-2"></div>
			</div>
		
			<div className="row">
				<div className="col-md-6">
					<div className="h-astro-l">
						<ul>
							<li>
								
								<h4><i className="fa fa-phone"></i> Select the astrologer</h4>
								<p>Go through the list of expert astrologers, analyze the astrologer's profile by biography, rating, languages, services, availability then choose the astrologer and select the services</p>
							</li>
							
							<li>
								
								<h4><i className="fa fa-phone"></i> Get report</h4>
								<p>Go through the list of expert astrologers, analyze the astrologer's profile by biography, rating, languages, services, availability then choose the astrologer and select the services</p>
							</li>
							
						</ul>
					</div>
				</div>
				<div className="col-md-6">
					<div className="h-astro-r">
						<ul>
							<li>
								
								<h4><i className="fa fa-phone"></i>  Enter birth details</h4>
								<p>Go through the list of expert astrologers, analyze the astrologer's profile by biography, rating, languages, services, availability then choose the astrologer and select the services</p>
							</li>
							
							<li>
								
								<h4><i className="fa fa-phone"></i> Chat with astrologer</h4>
								<p>Go through the list of expert astrologers, analyze the astrologer's profile by biography, rating, languages, services, availability then choose the astrologer and select the services</p>
							</li>
							
						</ul>
					</div>
				</div>
				
			</div>
		</div>
	</section>
		
);
export default Hservice_top;
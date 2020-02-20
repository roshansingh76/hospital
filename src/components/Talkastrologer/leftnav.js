import React from 'react';
import { Link } from 'react-router-dom';

const TalkastrologerLeftnav = () => (
		<TLeftnav/>		
		
);

const TLeftnav=()=>(
	
	<div className="col-md-3">
			<div className="astro-left-filt">
				<div className="ser-title-top">
					<h3><a href="#myModals" data-toggle="modal"><i className="fa fa-filter"></i> Filter</a></h3>
				</div>
			
				<div className="bs-filter hidden-xs">
					<div className="panel-group" id="accordion">
						<div className="panel panel-default">
							<div className="panel-heading">
								<h4 className="panel-title">
									<a href="#1"><span className="glyphicon glyphicon-plus"></span> Astrologer</a>
								</h4>
							</div>
						</div>
						<div className="panel panel-default">
							<div className="panel-heading">
								<h4 className="panel-title">
									<a href="#2"><span className="glyphicon glyphicon-plus"></span> Get Reports </a>
								</h4>
							</div>							
						</div>
						<div className="panel panel-default">
							<div className="panel-heading">
								<h4 className="panel-title">
									<a href="#2"><span className="glyphicon glyphicon-plus"></span> Shubh Muhurat </a>
								</h4>
							</div>							
						</div>
						
						
						<div className="panel panel-default">
							<div className="panel-heading">
								<h4 className="panel-title">
									<a data-toggle="collapse" data-parent="#accordion" href="#3"><span className="glyphicon glyphicon-plus"></span> Micro Vastu </a>
								</h4>
							</div>					
						</div>
						
						<div className="panel panel-default">
							<div className="panel-heading">
								<h4 className="panel-title">
									<a data-toggle="collapse" data-parent="#accordion" href="#4"><span className="glyphicon glyphicon-plus"></span> Handmade Kundli </a>
								</h4>
							</div>							
						</div>
						
						<div className="panel panel-default">
							<div className="panel-heading">
								<h4 className="panel-title">
									<a data-toggle="collapse" data-parent="#accordion" href="#4"><span className="glyphicon glyphicon-plus"></span> Free Kundli  </a>
								</h4>
							</div>							
						</div>
						
						
					</div>
				</div>
			</div>
		</div>
);
export default TLeftnav;
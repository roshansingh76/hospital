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
									<a data-toggle="collapse" data-parent="#accordion" href="#1"><span className="glyphicon glyphicon-plus"></span> Astrologer Services</a>
								</h4>
							</div>
							<div id="1" className="panel-collapse">
								<div className="panel-body">
									<div className="ser-filter">
										<ul>
											<li><label className="cont">Astrologer<input type="checkbox" value="checkbox"/><span className="checkmark"></span></label></li>
											<li><label className="cont">Palmistry<input type="checkbox" value="checkbox"/><span className="checkmark"></span></label></li>
											<li><label className="cont">Gems Stone<input type="checkbox" value="checkbox"/><span className="checkmark"></span></label></li>
											<li><label className="cont">Vastu Consultant<input type="checkbox" value="checkbox"/><span className="checkmark"></span></label></li>
											<li><label className="cont">Palmistry<input type="checkbox" value="checkbox"/><span className="checkmark"></span></label></li>
											<li><label className="cont">Feng Shui<input type="checkbox" value="checkbox"/><span className="checkmark"></span></label></li>
											<li><label className="cont">Tarot card reader<input type="checkbox" value=""/><span className="checkmark"></span></label></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						
						<div className="panel panel-default">
							<div className="panel-heading">
								<h4 className="panel-title">
									<a data-toggle="collapse" data-parent="#accordion" href="#2"><span className="glyphicon glyphicon-plus"></span> Shubh Muhurat </a>
								</h4>
							</div>
							<div id="2" className="panel-collapse">
								<div className="panel-body">
									<div className="ser-filter">
										<ul>
											<li><label className="cont">Make a purchase<input type="checkbox" value="checkbox"/><span className="checkmark"></span></label></li>
											<li><label className="cont">Opening Ceremony<input type="checkbox" value="checkbox"/><span className="checkmark"></span></label></li>
											<li><label className="cont">Major Life Decisions<input type="checkbox" value="checkbox"/><span className="checkmark"></span></label></li>
											<li><label className="cont">Puja / Rituals<input type="checkbox" value="checkbox"/><span className="checkmark"></span></label></li>
											<li><label className="cont">Special Muhurat<input type="checkbox" value="checkbox"/><span className="checkmark"></span></label></li>
											<li><label className="cont">Education and Exams<input type="checkbox" value="checkbox"/><span className="checkmark"></span></label></li>
											<li><label className="cont">Marriage / Court Marriage<input type="checkbox" value=""/><span className="checkmark"></span></label></li>
											<li><label className="cont">Tour Planning<input type="checkbox" value=""/><span className="checkmark"></span></label></li>
											<li><label className="cont">Business Initiatives<input type="checkbox" value=""/><span className="checkmark"></span></label></li>
											<li><label className="cont">Child Birth and Adoption<input type="checkbox" value=""/><span className="checkmark"></span></label></li>
										</ul>
									</div>
									
									
								</div>
							</div>								
						</div>
						
						
						<div className="panel panel-default">
							<div className="panel-heading">
								<h4 className="panel-title">
									<a data-toggle="collapse" data-parent="#accordion" href="#3"><span className="glyphicon glyphicon-plus"></span> Micro Vastu </a>
								</h4>
							</div>
							<div id="3" className="panel-collapse collapse">
								<div className="panel-body">
									
									
									
								</div>
							</div>								
						</div>
						
						<div className="panel panel-default">
							<div className="panel-heading">
								<h4 className="panel-title">
									<a data-toggle="collapse" data-parent="#accordion" href="#4"><span className="glyphicon glyphicon-plus"></span> Handmade Kundli </a>
								</h4>
							</div>
							<div id="4" className="panel-collapse collapse">
								<div className="panel-body">
									
								</div>
							</div>								
						</div>
						
						
					</div>
				</div>
			</div>
		</div>
);
export default TLeftnav;
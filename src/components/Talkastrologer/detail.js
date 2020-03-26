import React,{Component,Fragment}from 'react';
import { Link,browserHistory  } from 'react-router-dom';


class Astrologerdetails extends Component{
	
	
	
	render(){
		
			return(
	<section className="bg-ast">
		<div className="container">
			<div className="row bg-ast-pd">
				<div className="col-md-10">
					<div className="card card-ct">
						<div className="card-body">
							<div className="astloger-widget">
								<div className="doc-info-left">
									<div className="astloger-img">
										<img src="https://astrotalk.com/assets/astro/771.jpg" className="img-fluid" alt="User Image" />
									</div>
									<div className="doc-info-cont">
										<h4 className="doc-name">Acharya Balwant Sharma</h4>
										<p className="doc-speciality">Tarot Card Reading,Numerology,Vaastu,Prashna Kundali</p>
										<p className="doc-speciality">Language : Hindi,Gujarati</p>
										<p className="doc-speciality">Experience : 15 Year</p>
										<p className="doc-speciality"><i className="fa fa-map-marker"></i> Location : Gurgaon, India</p>
										<div className="rating">
											<i className="fa fa-star filled"></i>
											<i className="fa fa-star filled"></i>
											<i className="fa fa-star filled"></i>
											<i className="fa fa-star filled"></i>
											<i className="fa fa-star"></i>
											<span className="d-inline-block average-rating">(35)</span>
										</div>
										
										
									</div>
								</div>
								<div className="doc-info-right">
									<div className="clini-infos">
										<ul>
											<li><i className="fa fa-comment"></i> 35 Feedback</li>
											<li><i className="fa fa-map-marker"></i>Gurgaon, INDIA</li>
											<li><i className="fa fa-rupee"></i> 100 per hour </li>
										</ul>
									</div>
									<div className="astloger-action">
										<a href="chat.html" className="btn btn-white msg-btn">
											<i className="fa fa-comment"> Chat</i>
										</a>
										<a href="javascript:void(0)" className="btn btn-white call-btn" data-toggle="modal" data-target="#voice_call">
											<i className="fa fa-phone"> Call</i>
										</a>
										<a href="javascript:void(0)" className="btn btn-white call-btn" data-toggle="modal" data-target="#video_call">
											<i className="fa fa-tv"> Video</i>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="col-md-10">
					<div className="tab-v1">
						<nav>
						<div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
						<a class="nav-item nav-link nav-link-bg active" id="nav-recharge-tab" data-toggle="tab" href="#nav-recharge" role="tab" aria-controls="nav-recharge" aria-selected="true">Overview</a>
						<a class="nav-item nav-link nav-link-bg" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Reviews</a>
						<a class="nav-item nav-link nav-link-bg" id="nav-about-tab" data-toggle="tab" href="#nav-call" role="tab" aria-controls="nav-call" aria-selected="false">Business Hours</a>
						</div>

						</nav>

						<div className="tab-content tab-content-astro" id="nav-tabContent">
							<div className="tab-pane fade active show" id="nav-recharge" role="tabpanel" aria-labelledby="nav-recharge-tab">
								<div className="widget about-widget">
									<h4 className="widget-title">About Me</h4>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
								</div>

								<div className="service-list">
									<h4>Services</h4>
										<ul className="clearfix">
											<li>Tarot Card Reading </li>
											<li>Numerology</li>
											<li>Vaastu</li>
											<li>Prashna Kundali</li>
										</ul>
								</div>



							</div>

							<div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
								<div className="write-review">
									<h4>Write a review for <strong>Acharya Balwant Sharma</strong></h4>
									<form>
										<div className="form-group">
											<label>Review</label>
											<div className="star-rating">
												<input id="star-5" type="radio" name="rating" value="star-5" />
												<label for="star-5" title="5 stars">
													<i className="active fa fa-star"></i>
												</label>
												<input id="star-4" type="radio" name="rating" value="star-4" />
												<label for="star-4" title="4 stars">
													<i className="active fa fa-star"></i>
												</label>
												<input id="star-3" type="radio" name="rating" value="star-3" />
												<label for="star-3" title="3 stars">
													<i className="active fa fa-star"></i>
												</label>
												<input id="star-2" type="radio" name="rating" value="star-2" />
												<label for="star-2" title="2 stars">
													<i className="active fa fa-star"></i>
												</label>
												<input id="star-1" type="radio" name="rating" value="star-1" />
												<label for="star-1" title="1 star">
													<i className="active fa fa-star"></i>
												</label>
											</div>
										</div>
										<div className="form-group">
											<label>Title of your review</label>
											<input className="form-control" type="text" placeholder="If you could say it in one sentence, what would you say?" />
										</div>
										<div className="form-group">
											<label>Your review</label>
											<textarea id="review_desc"  rows="5" className="form-control"></textarea>
										  
										  <div className="d-flex justify-content-between mt-3"><small className="text-muted"><span id="chars">100</span> characters remaining</small></div>
										</div>
										<hr/>
										<div className="form-group">
											<div class="terms-accept">
												<div class="custom-checkbox">
												   <input type="checkbox" id="terms_accept" />
												   <label for="terms_accept">I have read and accept <a href="#">Terms &amp; Conditions</a></label>
												</div>
											</div>
										</div>
										<div className="submit-section">
											<button type="submit" className="btn btn-warning submit-btn">Add Review</button>
										</div>
									</form>	
								</div>
							</div>

							<div className="tab-pane fade" id="nav-call" role="tabpanel" aria-labelledby="nav-call-tab">
								<div className="widget business-widget">
									<div className="widget-content">
										<div className="listing-hours">
											<div className="listing-day current">
												<div className="day">Today <span>5 May 2020</span></div>
												<div className="time-items">
													<span className="open-status"><span className="badge bg-success-light">Open Now</span></span>
													<span className="time">07:00 AM - 09:00 PM</span>
												</div>
											</div>
											<div className="listing-day">
												<div className="day">Monday</div>
												<div className="time-items">
													<span className="time">07:00 AM - 09:00 PM</span>
												</div>
											</div>
											<div className="listing-day">
												<div className="day">Tuesday</div>
												<div className="time-items">
													<span className="time">07:00 AM - 09:00 PM</span>
												</div>
											</div>
											<div className="listing-day">
												<div className="day">Wednesday</div>
												<div className="time-items">
													<span className="time">07:00 AM - 09:00 PM</span>
												</div>
											</div>
											<div className="listing-day">
												<div className="day">Thursday</div>
												<div className="time-items">
													<span className="time">07:00 AM - 09:00 PM</span>
												</div>
											</div>
											<div className="listing-day">
												<div className="day">Friday</div>
												<div className="time-items">
													<span className="time">07:00 AM - 09:00 PM</span>
												</div>
											</div>
											<div className="listing-day">
												<div className="day">Saturday</div>
												<div className="time-items">
													<span className="time">07:00 AM - 09:00 PM</span>
												</div>
											</div>
											<div className="listing-day closed">
												<div className="day">Sunday</div>
												<div className="time-items">
													<span className="time"><span className="badge bg-danger-light">Closed</span></span>
												</div>
											</div>
										</div>
									</div>
								</div>

							</div>
						</div>
					</div>
				</div>
				
			</div>
		</div>
	</section>
			);
		
	}
}


export default Astrologerdetails;
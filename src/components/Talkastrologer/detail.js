import React,{Component,Fragment}from 'react';
import { Link,browserHistory  } from 'react-router-dom';


class Astrologerdetails extends Component{
	
	
	
	render(){
		
			return(
				<section className="bg-ast">
		<div className="container">
			<div className="row bg-ast-pd">
			<div className="col-md-3"></div>
				<div className="col-md-12">
					<div className="j-astro-profile">
						<div className="profile-pic-j">
							<img src="https://astrotalk.com/assets/astro/771.jpg" alt="image" />
						</div>
						<div className="profile-info-j">
							<h3>Acharya Prabhat</h3>
							
							<span className="a-spc">Speciality</span>
							<span className="a-spc-info">Vastu Consultant, Astrologer, Gems Stone</span>
							
							<span className="a-exp">Experience</span>
							<span className="a-exp-info">10 Year</span>
							
							<span className="a-edc">Education</span>
							<span className="a-edc-info">PHD in Astrology and Horoscope</span>
							
							<span className="a-lan">Languages</span>
							<span className="a-lan-info">Hindi, English</span>
							
							<span className="a-rat">Rating</span>
							<span className="a-rat-info">
								<span className="fa fa-star checked"></span>
								<span className="fa fa-star checked"></span>
								<span className="fa fa-star checked"></span>
								<span className="fa fa-star checked"></span>
								<span className="fa fa-star checked"></span>
							</span>
							
							<span className="a-loc">Location</span>
							<span className="a-loc-info">HauzKhas Village</span>
					
							<div className="a-pro-btn">
								<span className="btn-in">₹50</span>
								<span className="btn-wa"><a href="#"><span className="fa fa-phone-square"></span> Call</a></span>
								<span className="btn-suc"><a href="#"><span className="fa fa-phone-square"></span> Chat</a></span>
								{/*<span className="btn-suc"><a href="astrloger-book.html" ><span className="glyphicon glyphicon-calendar"></span> Chat</a></span>*/}
							</div>
							
						</div>
					</div>
				</div>
				
				<div className="col-md-6">
					<div className="a-t-title">
						<h4>Personal Statement</h4>
					</div>
					<div className="a-t-inner">
					<p>Quotes from Vikas Nautiyal “Nothing is final in the world, whether it is sorrow or happiness, whether it is success or failure. It is god's blessing to me that I am able to help you in overcoming the situation. <br/>If I get success to make you out of a tougher situation than it is my pleasure"....... He is a strong believer that the actions of our previous lives determine the present. <br/>Everyy event of the present life which is beyond our control is predetermined. A good environment at work, a good work place, a good doer and all the resources and efforts of doer are if not able to perform a work, then only the ‘Fate’ is the reason for non-completion and failure.<br/> – 18/11/42 Shloka of Bhagwat Geeta. Can any astrological remedy change the course of events? He says, Yes, to a great extent, but only where the right remedy is given which may be either Mantra or Pujas or Gemstones. <br/>He strongly believes that there are only two things that exist in the whole universe and that are namely<br/> 1) vibration/sound and <br/>2) energy, which is scientifically true also. Mantras are nothing but vibrations of different kinds and Gemstones provide cosmic energy through their divine rays which is required by an individual. <br/>He spent many years in detailed research and study of Astronomy, Astrology, Numerology, Gem-therapy, and Mantras etc. <br/>His sole motto was to solve the problems being faced by the people in different walks of life. To quote a few such as, that the girl’s family is very rich but marriage is not taking place, an advocate not able to solve his own problem, a doctor not able to treat his own child, etc.<br/> Since the age of around 30 he started providing astro-consultations solving the problems with innumerable correct prediction. During the last 8 years he has gone through thousands of horoscopes and has imparted astrological consultations to foreigners, NRI people and locals in India also. <br/>He has deep studies of this subject and has great expertise over various matters such as Health, Money, Shares and Investments, Travels, Education, Progeny, Litigation, Business and Corporate Matters, Longevity, Career, Marriage and related matters viz. Romance and Divorce. etc. <br/>His predictive system includes Vimshottari Dasha and Transit of planets in various Signs and Nakshatra. By the Grace of God, he has a good command over ‘Birth Time Rectification’ since many people who do not know their birth time still wish to know their future to execute their plans. For this he requires few major events of life which are beyond the control of a native such as date of birth of a child, marriage, education and percentage attained in the exams etc. <br/>He also involves the Ruling Planets at the time of rectifications. At times, it happens that an individual comes with a single peculiar problem in mind and desires an answer from the astrologer. The technique adopted at the time of answering is ‘Horary Astrology’. MR.Nautiyal has good command over this technique and thousands have been benefited by this service.   less</p>
					</div>
				</div>
				
				
				<div className="col-md-6">
					<div className="a-t-title">
						<h4>Write Reviews</h4>
					</div>
					<div className="a-t-inner">
						<div className="row row-f">
							<h5>Submit a review for Vikas Nautiyal</h5>
							<p>Your feedback matters!</p>
							<form className="submit-fr">
								<div className="col-md-6">
									<div className="form-group">
										<label for="name">Full Name</label>
										<input type="text" className="form-control" placeholder="Your Name" required="" />
									</div>
								</div>
								<div className="col-md-6">
									<div className="form-group">
										<label for="email">Email address:</label>
										<input type="email" className="form-control" placeholder="Your Emial ID" required="" />
									</div>
								</div>
								<div className="col-md-12">
									<div className="form-group">
										<label for="message">Your message</label>
										<textarea className="form-control" rows="5" id="comment" required="" placeholder="Please enter your feedback here..."></textarea>
									</div>
									
									<div className="lead">
									<div id="stars" className="starrr"></div>
										<div className="rat-infd">You gave a rating of <span id="count">0</span> star(s)</div>
									</div>
								</div>
								<div className="col-md-12">
									<button className="theme-btn" type="submit" name="submit-form">Submit Reviews</button>
								</div>

							</form>
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
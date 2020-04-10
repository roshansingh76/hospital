import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../../config/routes';
const subscribe=(props)=>{
	
	
}

const Footer=(props)=>{
	
	return (<footer>
	  <div className="footer-main">
		<div className="container">
		  <div className="footer-main-wrapper">
			<div className="row">
			  <div className="col-lg-3 col-sm-6 col-xs-6 footer-section-single">
				<div className="footer-educare-widget widget">
				  <div className="footer-title-widget">Jyotirvid</div>
				  <div className="footer-content-widget">
					<p>Jyotirvid is the most genuine online destination for all kinds of astrological services. We make sure to connect you with tried and tested, highly professional predictors who are experts of the science of planets. 
Chat or talk with predictors and seek all your answers about your future predictions.</p>
				  </div>
				</div>
			  </div>
			  <div className="col-lg-3 col-sm-6 col-xs-6 footer-section-single">
				<div className="useful-link-widget widget">
				  <div className="footer-title-widget">USEFUL LINKS</div>
				  <div className="footer-content-widget">
					<div className="useful-link-list">
					  <div className="row">
						<div className="col-lg-6 col-sm-6 col-xs-6">
						  <ul className="list-unstyled">
							<li><i className="fa fa-angle-right"></i><Link to={ROUTES.About}>About</Link></li>
							<li><i className="fa fa-angle-right"></i><Link to={ROUTES.Talkastrologer}>Chat With Astrologer</Link></li>
							<li><i className="fa fa-angle-right"></i><Link to={ROUTES.MuhuratList}>Shubh Muhurat</Link></li>
							
						  </ul>
						</div>
						<div className="col-lg-6 col-sm-6 col-xs-6">
						  <ul className="list-unstyled">
						  	<li><i className="fa fa-angle-right"></i><a href="https://rgyan.com/horoscope/" target="_blank">Free Horoscope Report</a></li>
						  	<li><i className="fa fa-angle-right"></i><Link to={ROUTES.VastuList}>Micro Vastu</Link></li>
							<li><i className="fa fa-angle-right"></i><Link to={ROUTES.KundliList}>Handmade Janam Kundli</Link></li>
						  </ul>
						</div>
					  </div>
					</div>
				  </div>
				</div>
			  </div>
			  <div className="col-lg-3 col-sm-6 col-xs-6 footer-section-single">
				<div className="footer-educare-widget widget">
				  <div className="footer-title-widget">CONTACT INFO</div>
				  <div className="footer-content-widget">
					<div className="info-list">
					  <ul className="list-unstyled">
						<li><i className="fa fa-envelope-o"></i><a href="#">info@Jyotirvid.in</a></li>
						<li><i className="fa fa-phone"></i><a href="#">P:+91 770 3881 443</a></li>
						<li><i className="fa fa-map-marker"></i><a href="#">
						  <p>177-P , Sector 51 </p>
						  <p>Gurugram, Haryana - 122001</p>
						  </a></li>
					  </ul>
					</div>
				  </div>
				</div>
			  </div>
			  <div className="col-lg-3 col-sm-6 col-xs-6 footer-section-single">
				<div className="mailing-widget widget">
				  <div className="footer-title-widget">MAILING</div>
				  <div className="content-wiget">
					<p>Sign up for our mailing list to get </p>
					<form action="">
					  <div className="input-group">
						<input type="text" placeholder="Email address" name="subscribe-email" id="subscribe-email" className="form-control form-email-widget"/>
						<span className="input-group-btn">
						<input type="button" value="✓" onClick={subscribe}  className="btn btn-email"/>
						</span></div>
					</form>
					<p>We respect your privacy</p>
					<div className="socials">
						<a href="https://www.facebook.com/jyotirvid2017/" className="facebook" target="_blank"><i className="fa fa-facebook" ></i></a>
						<a href="https://twitter.com/Jyotirvid2018" className="twitter" target="_blank"><i className="fa fa-twitter"></i></a>
						<a href="https://in.pinterest.com/jyotirvid2018/" className="pinterest" target="_blank"><i className="fa fa-pinterest"></i></a>
						{/*<a href="#" className="blogss" target="_blank"><i className="fa fa-rss"></i></a>*/}

						</div>
				  </div>
				</div>
			  </div>
			</div>
		  </div>
		  <div className="hyperlink">
			<div className="pull-right hyper-right">Copy Right @2018 Jyotirvid</div>
		  </div>
		</div>
	  </div>
		</footer>
	)
}
export default Footer;
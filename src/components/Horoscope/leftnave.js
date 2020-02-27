import React from 'react';
import { Link } from 'react-router-dom';

const HoroscopeLeftnav = () => (
		<HLeftnav/>		
		
);

const HLeftnav=()=>(
	
	<div className="col-md-3 order-md-1">
			<div className="astro-left-filt">
				<p>Our Services</p>
				<ul>
					<li><a href="#">Astrologer  <i className="fa fa-bell-o" aria-hidden="true"></i></a></li>
					<li><a href="#" >Get Reports</a></li>
					<li><a href="#" className="active">Free Horoscope</a></li>
					<li><a href="#" >Shubh Muhurat</a></li>
					<li><a href="#" >Micro Vastu</a></li>
					<li><a href="#" >Handmade Kundli</a></li>
					<li><a href="#" >Free Kundli</a></li>

				</ul>
			</div>	
		</div>
);
export default HLeftnav;
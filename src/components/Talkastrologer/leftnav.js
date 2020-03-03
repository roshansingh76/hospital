import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../config/routes';

const TalkastrologerLeftnav = () => (
		<TLeftnav/>		
		
);

const TLeftnav=()=>(
	
	<div className="col-md-3">
			<div className="astro-left-filt">
				<p>Our Services</p>
				<ul>
					<li><Link to={ROUTES.Talkastrologer} className="active">Astrologer  <i className="fa fa-bell-o" aria-hidden="true"></i></Link></li>
					<li><Link to={ROUTES.Horoscopesdefault+'/aries'}>Free Horoscope</Link></li>
					<li><Link to={ROUTES.Talkastrologer}>Get Reports</Link></li>
					<li><Link to={ROUTES.Muhurat}>Shubh Muhurat</Link></li>
					<li><Link to={ROUTES.Vastu}>Micro Vastu</Link></li>
					<li><Link to={ROUTES.Kundli}>Handmade Kundli</Link></li>
					<li><Link to={ROUTES.Talkastrologer}>Free Kundli</Link></li>
				</ul>
			</div>	
		</div>
);
export default TLeftnav;
import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../config/routes';
import { createBrowserHistory } from "history";

const TalkastrologerLeftnav=(props)=>{
		const history = createBrowserHistory()
	    let slug=history.location.pathname.replace('/', "");
	 return (<div className="col-md-3">
			<div className="astro-left-filt">
				<p>Our Services</p>
				<ul>
					<li className={slug==='talk-astrologer' ? 'active':''}><Link to={ROUTES.Talkastrologer} className={slug==='talk-astrologer' ? 'active':''}>Astrologer  <i className="fa fa-bell-o" aria-hidden="true"></i></Link></li>
					<li  className={slug==='horoscope/aries' ? 'active':''}><Link className={slug==='horoscope/aries' ? 'active':''}  to={ROUTES.Horoscopesdefault+'/aries'}>Free Horoscope</Link></li>
					<li  className={slug==='muhurat' ? 'active':''}><Link className={slug==='muhurat' ? 'active':''} to={ROUTES.MuhuratList}>Shubh Muhurat</Link></li>
					<li  className={slug==='micro-vastu' ? 'active':''}><Link   className={slug==='micro-vastu' ? 'active':''} to={ROUTES.VastuList}>Micro Vastu</Link></li>
					<li  className={slug==='kundli' ? 'active':''}><Link className={slug==='kundli' ? 'active':''} to={ROUTES.KundliList}>Handmade Kundli</Link></li>
		
				</ul>
			</div>	
		</div>)
};
export default TalkastrologerLeftnav;
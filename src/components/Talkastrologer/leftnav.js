import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../config/routes';
import { createBrowserHistory } from "history";
import img1 from "./../../assets/banner/Chat.png";
import img2 from "./../../assets/banner/Horoscope.png";
import img3 from "./../../assets/banner/Muhurat.png";
import img4 from "./../../assets/banner/Vastu.png";
import img5 from "./../../assets/banner/Kundli.png";

const TalkastrologerLeftnav=(props)=>{
		const history = createBrowserHistory()
	    let slug=history.location.pathname.replace('/', "");
	 return (<div className="col-md-3 d-none d-sm-none d-md-block">
			<div className="astro-left-filt">
				<p>Our Services</p>
				<ul>
					<li className={slug==='talk-astrologer' ? 'active':''}><Link to={ROUTES.Talkastrologer} className={slug==='talk-astrologer' ? 'active':''}>Consult Astrologer  <img src={img1} alt="" /></Link></li>
					<li  className={slug==='horoscope/aries' ? 'active':''}><Link className={slug==='horoscope/aries' ? 'active':''}  to={ROUTES.Horoscopesdefault+'/aries'}>Free Horoscope <img src={img2} alt="" /></Link></li>
					<li  className={slug==='muhurat' ? 'active':''}><Link className={slug==='muhurat' ? 'active':''} to={ROUTES.MuhuratList}>Shubh Muhurat <img src={img3} alt="" /></Link></li>
					<li  className={slug==='micro-vastu' ? 'active':''}><Link   className={slug==='micro-vastu' ? 'active':''} to={ROUTES.VastuList}>Micro Vastu <img src={img4} alt="" /></Link></li>
					<li  className={slug==='kundli' ? 'active':''}><Link className={slug==='kundli' ? 'active':''} to={ROUTES.KundliList}>Handmade Kundli <img src={img5} alt="" /></Link></li>
		
				</ul>
			</div>	
		</div>)
};
export default TalkastrologerLeftnav;
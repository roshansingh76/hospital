import React from 'react';
import { Link } from 'react-router-dom';
import bg1 from "./../../assets/bg.jpg";
import img1 from "./../../assets/banner/Recharge-your-wallet2.png";
import img2 from "./../../assets/banner/Get-reports2.png";
import img3 from "./../../assets/banner/Muhurat.png";
import img4 from "./../../assets/banner/Horoscope.png";
const HomeService_top = () => (
		<Hservice_top/>		
		
);

const Hservice_top=()=>(
    <section className="padding section-bg-1" style={{ backgroundImage:`url(${bg1})`}}>
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
								
								<h4><img src={img1} alt="img"/> Select the astrologer</h4>
								<p>Recharge your wallet and consult with various verified astrologers through Chat or Call Options.</p>
							</li>
							
							<li>
								
								<h4><img src={img2} alt="img"/> Get report</h4>
								<p>Get reports related to Love, Health, Relationship or Career predictions.</p>
							</li>
							
						</ul>
					</div>
				</div>
				<div className="col-md-6">
					<div className="h-astro-r">
						<ul>
							<li>
								
								<h4><img src={img3} alt="img"/> Get Muhurat and Vastu</h4>
								<p>Planning for any auspicious activity? Get customised Shubh Muhurat  and Micro Vastu reports.</p>
							</li>
							
							<li>
								
								<h4><img src={img4} alt="img"/> Free Horoscope</h4>
								<p>Explore Free Horoscope, Match Making, Handmade Kundli and astrological products.</p>
							</li>
							
						</ul>
					</div>
				</div>
				
			</div>
		</div>
	</section>
		
);
export default Hservice_top;
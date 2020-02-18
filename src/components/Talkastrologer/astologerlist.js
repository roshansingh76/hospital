import React from 'react';
import { Link } from 'react-router-dom';

const TalkastrologerAstologerlist = () => (
		<TAstologerlist/>		
		
);

const TAstologerlist=()=>(
	
	<div className="col-md-9">
					<div className="row">
						<div className="col-md-4 ap-pad">
							<div className="astro-profile-box">
								<div className="astro-pic">
									<a href=""><img src="https://www.jyotirvid.in/assets/img/user_imgs/1523439331.png" alt="" /></a>
									<div className="astro-star">
										<span className="fa fa-star checked"></span>
										<span className="fa fa-star checked"></span>
										<span className="fa fa-star checked"></span>
										<span className="fa fa-star checked"></span>
										<span className="fa fa-star checked"></span>
									</div>
								</div>
								<div className="astro-r-n">
										<div className="astro-name">
											<p><a href="">Rashi Gaur</a></p>
										</div>
										<div className="astro-p-deatil">
											<p>Tarot card reader, Vastu Consultant, Astrologer, Gems Stone, Palmistry</p>
											<p>English, Hindi</p>
											<p>Exp: 17 Years</p>
											<p>Location</p>
										</div>
								</div>
								<div className="astro--actin-btn">
									<span className="astro-price-r"><div className="astro-price">₹25/Min</div><a href="">chat</a></span>
									<span className="astro-price-b"><div className="astro-price">₹50/Min</div><a href=""> Call </a></span>
									<span className="astro-price-g"><div className="astro-price">₹599</div><a href="astrloger-book.html"> Get Report</a></span>
								</div>
							</div>
						</div>
						
					</div>
				</div>
);
export default TAstologerlist;
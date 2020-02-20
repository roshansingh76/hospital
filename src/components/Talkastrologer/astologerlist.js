import React from 'react';
import { Link } from 'react-router-dom';

const TalkastrologerAstologerlist = () => (
		<TAstologerlist/>		
		
);

const TAstologerlist=()=>(
	
	<div className="col-md-9">
		<div className="row">
			<div className="col-md-12">
				<div className="golabal-filter golabal-filter-drop-list">
					<p><a href="#"><i class="fa fa-filter"></i> Filter</a></p>
					<div class="dropdown-new">
						<button class="dropbtn-new">Expertise  <i class="fa fa-caret-down"></i></button>
						<div class="dropdown-content-new">	
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
					
					<div class="dropdown-new">
						<button class="dropbtn-new"> Languages  <i class="fa fa-caret-down"></i></button>
						<div class="dropdown-content-new">
							<ul>
								<li><label className="cont">English<input type="checkbox" value="checkbox"/><span className="checkmark"></span></label></li>
								<li><label className="cont">Hindi<input type="checkbox" value="checkbox"/><span className="checkmark"></span></label></li>
							</ul>
						</div>
					</div> 
					
					<div class="dropdown-new">
						<button class="dropbtn-new"> Rating   <i class="fa fa-caret-down"></i></button>
						<div class="dropdown-content-new">
							<ul>
								<li><label className="cont">3 Star<input type="checkbox" value="checkbox"/><span className="checkmark"></span></label></li>
								<li><label className="cont">4 Star<input type="checkbox" value="checkbox"/><span className="checkmark"></span></label></li>
								<li><label className="cont">4 Star<input type="checkbox" value="checkbox"/><span className="checkmark"></span></label></li>
							</ul>
						</div>
					</div> 
					
					<div class="dropdown-new">
						<button class="dropbtn-new">Experience  <i class="fa fa-caret-down"></i></button>
						<div class="dropdown-content-new">
							<ul>
								<li><label className="cont">0 To 5 Years<input type="checkbox" value="checkbox"/><span className="checkmark"></span></label></li>
								<li><label className="cont">5 To 10 Years<input type="checkbox" value="checkbox"/><span className="checkmark"></span></label></li>
								<li><label className="cont">10 To 15 Years<input type="checkbox" value="checkbox"/><span className="checkmark"></span></label></li>
								<li><label className="cont">15 To 20 Years<input type="checkbox" value="checkbox"/><span className="checkmark"></span></label></li>
							</ul>
						</div>
					</div> 
					<div class="dropdown-new">
						<button class="dropbtn-new">Price   <i class="fa fa-caret-down"></i></button>
						<div class="dropdown-content-new">
							<ul>
								<li><label className="cont">Price doesn't matter<input type="checkbox" value="checkbox"/><span className="checkmark"></span></label></li>
								<li><label className="cont">Upto ₹20/Min<input type="checkbox" value="checkbox"/><span className="checkmark"></span></label></li>
								<li><label className="cont">Between ₹20 - ₹50/Min<input type="checkbox" value="checkbox"/><span className="checkmark"></span></label></li>
								<li><label className="cont">Above ₹50/Min<input type="checkbox" value="checkbox"/><span className="checkmark"></span></label></li>
							</ul>
						</div>
					</div> 
				</div>
			</div>
		</div>
		<div className="row">
		
			<div className="col-md-4 ap-pad">
				<div className="astro-profile-box">
					<div className="astro-pic">
						<a href=""><img src="https://astrotalk.com/assets/astro/771.jpg" alt="" /></a>
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
								<p>Tarot card reader, Vastu Consultant, Astrologer</p>
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
			
			<div className="col-md-4 ap-pad">
				<div className="astro-profile-box">
					<div className="astro-pic">
						<a href=""><img src="https://astrotalk.com/assets/astro/771.jpg" alt="" /></a>
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
								<p>Tarot card reader, Vastu Consultant, Astrologer</p>
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
			
			<div className="col-md-4 ap-pad">
				<div className="astro-profile-box">
					<div className="astro-pic">
						<a href=""><img src="https://astrotalk.com/assets/astro/771.jpg" alt="" /></a>
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
								<p>Tarot card reader, Vastu Consultant, Astrologer</p>
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
			
			<div className="col-md-4 ap-pad">
				<div className="astro-profile-box">
					<div className="astro-pic">
						<a href=""><img src="https://astrotalk.com/assets/astro/771.jpg" alt="" /></a>
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
								<p>Tarot card reader, Vastu Consultant, Astrologer</p>
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
			
			<div className="col-md-4 ap-pad">
				<div className="astro-profile-box">
					<div className="astro-pic">
						<a href=""><img src="https://astrotalk.com/assets/astro/771.jpg" alt="" /></a>
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
								<p>Tarot card reader, Vastu Consultant, Astrologer</p>
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
			
			<div className="col-md-4 ap-pad">
				<div className="astro-profile-box">
					<div className="astro-pic">
						<a href=""><img src="https://astrotalk.com/assets/astro/771.jpg" alt="" /></a>
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
								<p>Tarot card reader, Vastu Consultant, Astrologer</p>
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
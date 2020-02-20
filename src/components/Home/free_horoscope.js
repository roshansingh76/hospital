import React from 'react';
import { Link } from 'react-router-dom';
import img1 from './../../assets/astro/images/sign/aries.png';
import img2 from './../../assets/astro/images/sign/taurus.png';
import img3 from './../../assets/astro/images/sign/gemini.png';
import img4 from './../../assets/astro/images/sign/cancer.png';
import img5 from './../../assets/astro/images/sign/leo.png';
import img6 from './../../assets/astro/images/sign/virgo.png';
import img7 from './../../assets/astro/images/sign/libra.png';
import img8 from './../../assets/astro/images/sign/scorpio.png';
import img9 from './../../assets/astro/images/sign/sagittarius.png';
import img10 from './../../assets/astro/images/sign/capricorn.png';
import img11 from './../../assets/astro/images/sign/aquarius.png';
import img12 from './../../assets/astro/images/sign/pisces.png';
const HomeFree_horoscope = () => (
		<Hfree_horoscope/>		
		
);


const Hfree_horoscope=()=>(
    <section className="padding">
		<div className="container">
			<div className="row mb-20">
			  <div className="col-sm-1 col-md-2"></div>
			  <div className="col-xs-12 col-sm-10 col-lg-8 text-center">
				<h2 className="text-uppercase">Free <span className="color_red">Horoscope</span></h2>
				<div className="line_1-1"></div>
				<div className="line_2-2"></div>
				<div className="line_3-3"></div>
			  </div>
			  <div className="col-sm-1 col-lg-2"></div>
			</div>
			<div className="row horoscope-main-inn">
				<div className="col-md-12">
				<ul>
					<li>
						<div className="horoscope-inner no">
							<a href="horoscope-single.html">
								<img src={img1} alt="aries" />
								<p>Aries</p>
								<span>Thursday, February 07, 2019</span>
							</a>
						</div>
					</li>
					
					<li>
						<div className="horoscope-inner">
							<a href="horoscope-single.html">
								<img src={img2} alt="images" />
								<p>Taurus</p>
								<span>Thursday, February 07, 2019</span>
							</a>
						</div>
					</li>
					
					<li>
						<div className="horoscope-inner">
							<a href="horoscope-single.html">
								<img src={img3} alt="images" />
								<p>Gemini</p>
								<span>Thursday, February 07, 2019</span>
							</a>
						</div>
					</li>
					
					<li>
						<div className="horoscope-inner">
							<a href="horoscope-single.html">
								<img src={img4} alt="images" />
								<p>Cancer</p>
								<span>Thursday, February 07, 2019</span>
							</a>
						</div>
					</li>
					
					<li>
						<div className="horoscope-inner">
							<a href="horoscope-single.html">
								<img src={img5} alt="images" />
								<p>Leo</p>
								<span>Thursday, February 07, 2019</span>
							</a>
						</div>
					</li>
					
					<li>
						<div className="horoscope-inner">
							<a href="horoscope-single.html">
								<img src={img6} alt="images" />
								<p>Virgo </p>
								<span>Thursday, February 07, 2019</span>
							</a>
						</div>
					</li>
					
					<li>
						<div className="horoscope-inner">
							<a href="horoscope-single.html">
								<img src={img7} alt="images" />
								<p>Libra </p>
								<span>Thursday, February 07, 2019</span>
							</a>
						</div>
					</li>
					
					<li>
						<div className="horoscope-inner">
							<a href="horoscope-single.html">
								<img src={img8} alt="images" />
								<p>Scorpio </p>
								<span>Thursday, February 07, 2019</span>
							</a>
						</div>
					</li>
					
					<li>
						<div className="horoscope-inner">
							<a href="#">
								<img src={img9} alt="images" />
								<p>Sagittarius </p>
								<span>Thursday, February 07, 2019</span>
							</a>
						</div>
					</li>
					
					<li>
						<div className="horoscope-inner">
							<a href="horoscope-single.html">
								<img src={img10} alt="images" />
								<p>Capricorn </p>
								<span>Thursday, February 07, 2019</span>
							</a>
						</div>
					</li>
					
					<li>
						<div className="horoscope-inner">
							<a href="horoscope-single.html">
								<img src={img11} alt="images" />
								<p>Aquarius  </p>
								<span>Thursday, February 07, 2019</span>
							</a>
						</div>
					</li>
					
					<li>
						<div className="horoscope-inner">
							<a href="horoscope-single.html">
								<img src={img12} alt="images" />
								<p>Pisces</p>
								<span>Thursday, February 07, 2019</span>
							</a>
						</div>
					</li>
				</ul>
				
				</div>
			</div>
		</div>
	</section>
		
);
export default HomeFree_horoscope;
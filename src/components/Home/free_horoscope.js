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
    <section class="padding">
		<div class="container">
			<div class="row mb-20">
			  <div class="col-sm-1 col-md-2"></div>
			  <div class="col-xs-12 col-sm-10 col-lg-8 text-center">
				<h2 class="text-uppercase">Sun <span class="color_red">Signs</span></h2>
				<div class="line_1-1"></div>
				<div class="line_2-2"></div>
				<div class="line_3-3"></div>
			  </div>
			  <div class="col-sm-1 col-lg-2"></div>
			</div>
			<div class="row horoscope-main-inn">
				<div class="col-md-12">
				<ul>
					<li>
						<div class="horoscope-inner no">
							<a href="horoscope-single.html">
								<img src={img1} alt="aries" />
								<p>Aries</p>
								<span>Thursday, February 07, 2019</span>
							</a>
						</div>
					</li>
					
					<li>
						<div class="horoscope-inner">
							<a href="horoscope-single.html">
								<img src={img2} alt="images" />
								<p>Taurus</p>
								<span>Thursday, February 07, 2019</span>
							</a>
						</div>
					</li>
					
					<li>
						<div class="horoscope-inner">
							<a href="horoscope-single.html">
								<img src={img3} alt="images" />
								<p>Gemini</p>
								<span>Thursday, February 07, 2019</span>
							</a>
						</div>
					</li>
					
					<li>
						<div class="horoscope-inner">
							<a href="horoscope-single.html">
								<img src={img4} alt="images" />
								<p>Cancer</p>
								<span>Thursday, February 07, 2019</span>
							</a>
						</div>
					</li>
					
					<li>
						<div class="horoscope-inner">
							<a href="horoscope-single.html">
								<img src={img5} alt="images" />
								<p>Leo</p>
								<span>Thursday, February 07, 2019</span>
							</a>
						</div>
					</li>
					
					<li>
						<div class="horoscope-inner">
							<a href="horoscope-single.html">
								<img src={img6} alt="images" />
								<p>Virgo </p>
								<span>Thursday, February 07, 2019</span>
							</a>
						</div>
					</li>
					
					<li>
						<div class="horoscope-inner">
							<a href="horoscope-single.html">
								<img src={img7} alt="images" />
								<p>Libra </p>
								<span>Thursday, February 07, 2019</span>
							</a>
						</div>
					</li>
					
					<li>
						<div class="horoscope-inner">
							<a href="horoscope-single.html">
								<img src={img8} alt="images" />
								<p>Scorpio </p>
								<span>Thursday, February 07, 2019</span>
							</a>
						</div>
					</li>
					
					<li>
						<div class="horoscope-inner">
							<a href="#">
								<img src={img9} alt="images" />
								<p>Sagittarius </p>
								<span>Thursday, February 07, 2019</span>
							</a>
						</div>
					</li>
					
					<li>
						<div class="horoscope-inner">
							<a href="horoscope-single.html">
								<img src={img10} alt="images" />
								<p>Capricorn </p>
								<span>Thursday, February 07, 2019</span>
							</a>
						</div>
					</li>
					
					<li>
						<div class="horoscope-inner">
							<a href="horoscope-single.html">
								<img src={img11} alt="images" />
								<p>Aquarius  </p>
								<span>Thursday, February 07, 2019</span>
							</a>
						</div>
					</li>
					
					<li>
						<div class="horoscope-inner">
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
import React from 'react';
import { Link } from 'react-router-dom';
import slider1 from './../../assets/astro/images/banner/demoslider.jpg';

const HomeSlider = () => (
		<Hslider/>		
		
);


const Hslider=()=>(
    <section className="home-banner">
            <a href=""><img src={slider1} alt="Los Angeles"/></a>
            <div className="banner-services-icons">
            	<ul>
            		<li>
            			<a href=""><img src="https://rgyan.com/public/uploads/2019-04/astology.jpg" alt="img"/> <span>Talk Astrologer</span></a>
            		</li>
            		<li>
            			<a href=""><img src="https://rgyan.com/public/uploads/2019-09/health.jpg" alt="img"/> <span>Chat Astrologer</span></a>
            		</li>
            		<li>
            			<a href=""><img src="https://rgyan.com/public/uploads/2019-04/suvichar.jpg" alt="img"/> <span>Shubh Muhurat</span></a>
            		</li>
            		<li>
            			<a href=""><img src="https://rgyan.com/public/uploads/2019-04/spirituals.jpg" alt="img"/> <span>Micro Vastu</span></a>
            		</li>
            	</ul>
            </div>
</section>
		
);
export default HomeSlider;
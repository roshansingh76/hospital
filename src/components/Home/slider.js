import React from 'react';
import { Link } from 'react-router-dom';
import slider1 from './../../assets/astro/images/banner/demoslider.jpg';

const HomeSlider = () => (
		<Hslider/>		
		
);


const Hslider=()=>(
    <section className="home-banner">
            <a href=""><img src={slider1} alt="Los Angeles"/></a>
</section>
		
);
export default HomeSlider;
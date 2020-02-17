import React from 'react';
import { Link } from 'react-router-dom';
import slider1 from './../../assets/astro/images/banner/3.jpg';

const HomeSlider = () => (
		<Hslider/>		
		
);


const Hslider=()=>(
    <section class="slider_section header_height">
    <ul id="main-slider" class="owl-carousel main_slider">
        <li class="main_slide">
            <a href=""><img src={slider1} alt="Los Angeles"/></a>
        </li>
    </ul>
</section>
		
);
export default HomeSlider;
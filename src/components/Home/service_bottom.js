import React from 'react';
import { Link } from 'react-router-dom';
import bg2 from "./../../assets/love-mar2.jpg";
import bg3 from "./../../assets/love.jpg";
const HomeService_bottom = () => (
		<Hservice_bottom/>		
		
);

const Hservice_bottom=()=>(
    <section className="padding values">
		<div className="container">
			<div className="row">
				<div className="col-md-6">
					<a href="https://rgyan.com/horoscope/" target="_blank"><div class="card card-bg" style={{ backgroundImage:`url(${bg2})`}}>
		              <div class="card-body">
		                <h5 class="card-title"><a href="#">Free Match Making</a></h5>
		               
		                <div class="read-more"><a href="#"><i class="icofont-arrow-right"></i> GET NOW</a></div>
		              </div>
            		</div></a>
				</div>

				<div className="col-md-6">
					<a href="https://rgyan.com/horoscope/" target="_blank"><div class="card card-bg" style={{ backgroundImage:`url(${bg3})`}}>
		              <div class="card-body">
		                <h5 class="card-title"><a href="#">Free Horoscope</a></h5>
		                
		                <div class="read-more"><a href="#"><i class="icofont-arrow-right"></i> GET NOW</a></div>
		              </div>
            		</div></a>
				</div>

			</div>
		</div>
	</section>
		
);
export default Hservice_bottom;
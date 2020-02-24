import React from 'react';
import { Link } from 'react-router-dom';

import ContentLoader, { Facebook,Lis,BulletList   } from 'react-content-loader'


const HomeAstro_mini_service=(props)=>{
    let muhurat=props.data.muhurat;
	let vastu=props.data.vastu;
	const regex = /(<([^>]+)>)/ig;

	return (<section className="sub-vast-muh padding">
		<div className="container">
			<div className="row mb-20">
				<div className="col-sm-1 col-md-2"></div>
				<div className="col-xs-12 col-sm-10 col-lg-8 text-center">
					<h2 className="text-uppercase">Our <span className="color_red">Services</span></h2>
					<div className="line_1-1"></div>
					<div className="line_2-2"></div>
					<div className="line_3-3"></div>
				</div>
				<div className="col-sm-1 col-lg-2"></div>
			</div>	
			<div className="row">	
				<div className="col-md-4">
					<div className="jyt_micro_astrology-head">
						<h4>Shubh Muhurat</h4>
					</div>
					<div className="jyt_micro_astrology jyt_micro">
						{ muhurat.length===0 &&
							 <ul>
								<center><BulletList></BulletList></center>
							</ul>
						}
						{	muhurat.length > 1 && 
						<ul>
							 {muhurat.map((rowData, index) => (
							<li key={index+1}>
								<a href="#">
									<img src="https://www.jyotirvid.in/web_assets/muhurat/BUYING_P.png" alt={rowData.title} />
									<div className="ast_vedic_astro_info">
										<h5>{rowData.title}</h5>
										<p>{(rowData.description.substring(0,100).replace(regex,''))}.</p>
									</div>
								</a>
							</li>
							
							))};
				
						</ul>
						
						}
					</div>
				</div>
				
				
				<div className="col-md-4">
					<div className="jyt_micro_astrology-head">
						<h4>Micro Vastu</h4>
					</div>
					<div className="jyt_micro_astrology jyt_micro">
						{ vastu.length===0 &&
							 <ul>
								<center><BulletList></BulletList></center>
							</ul>
						}
				=
						{	vastu.length > 1 && 
						<ul>
							 {vastu.map((rowData, index) => (
							<li key={index+1}>
								<a href="muhurat-list.html">
									<img src="https://www.jyotirvid.in/web_assets/vastu/VASTU_for_the_Main_Entrance.png" alt={rowData.title}/>
									<div className="ast_vedic_astro_info">
										<h5>{rowData.title}</h5>
										<p>{(rowData.description.substring(0,100).replace(regex,''))}</p>
									</div>
								</a>
							</li>
							))};
						
							
						
						</ul>
						}
					</div>
				</div>
				
				<div className="col-md-4">
				
					<div className="jyt_micro_astrology-head">
						<h4>Handmade Janam Kundli</h4>
					</div>
					<div className="hvrbox">
						<img src="images/basic.jpg" alt="Mountains" className="hvrbox-layer_bottom" />
						<div className="hvrbox-layer_top hvrbox-layer_slideright">
							<div className="hvrbox-text">
								<p>Handmade Janam Kundli is a manually calculated horoscope based on the system of Sun/Zodiac Signs. In our exclusive Janam Kundli, we provide 100% genuine...</p>
								<a href="muhurat-detail.html" className="btn btn-warning btn-sm">Know more</a>
							</div>
						</div>
					</div>
				
					<div className="jyt_micro_astrology-head">
						<h4>Business Life Prediction Kundli</h4>
					</div>
					<div className="hvrbox">
						<img src="images/advence.jpg" alt="Mountains" className="hvrbox-layer_bottom" />
						<div className="hvrbox-layer_top hvrbox-layer_slideright">
							<div className="hvrbox-text">
								<p>Business Life-Prediction Kundli is one of a kind Kundli style. Business Kundli is conventionally introduced to take care your venture and new- undertaking’s ifs and buts. This unique commerci...</p>
								<a href="muhurat-detail.html" className="btn btn-warning btn-sm">Know more</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	);	
};
export default HomeAstro_mini_service;
import React from 'react';
import { Link } from 'react-router-dom';
import ContentLoader, { Facebook,List  } from 'react-content-loader'




const HomeFree_horoscope=(props)=>{
	 let horoscope=props.data;

    return (
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
				{ horoscope.length===0 &&
				 <ul>
					<center><List></List></center>
				</ul>
				}
				
				{
				horoscope.length > 1 && 
				 <ul>
				 {horoscope.map((rowData, index) => (
						<li key={index+1}>
							<div className="horoscope-inner no">
								<a href="horoscope-single.html">
									<img src={rowData.mphot} alt={rowData.sunsign_en}/>
									<p>{rowData.sunsign_en}</p>
									<span>Thursday, February 07, 2019</span>
								</a>
							</div>
						</li>
				))};
				
				 </ul>
				}
				</div>
			</div>
			
		</div>
	</section>
	
	
	);
		
};
export default HomeFree_horoscope;
import React from 'react';
import { Link } from 'react-router-dom';

import ContentLoader, { Facebook,Lis,BulletList   } from 'react-content-loader'


const HomeAstro_mini_service=(props)=>{
    let muhurat=props.data.muhurat;
	let vastu=props.data.vastu;
	let kundli=props.data.kundli;
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
						
							<center><BulletList  viewBox="1 1 200 400"
							></BulletList></center>
					
						}
						{	muhurat.length > 1 && 
						<ul>
							 {muhurat.map((rowData, index) => (
							<li key={index+1}>
						 	<Link  to={'muhurat/'+rowData.muhurat_slug.toLowerCase()}  >
									<img src={ require(`../../assets/muhurat/${rowData.muhurat_image}`) } alt={rowData.title} />
									<div className="ast_vedic_astro_info">
										<h5>{rowData.title}</h5>
										<p>{(rowData.description.substring(0,100).replace(regex,''))}.</p>
									</div>
								</Link>
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
							
								<center><BulletList  viewBox="1 1 200 400"></BulletList></center>
							
						}
			
						{	vastu.length > 1 && 
						<ul>
							 {vastu.map((rowData, index) => (
							<li key={index+1}>
							   <Link  to={'vastu/'+rowData.vastu_slug.toLowerCase()}  >
									<img src={ require(`../../assets/vastu/${rowData.vastu_image}`) } alt={rowData.title}/>
									<div className="ast_vedic_astro_info">
										<h5>{rowData.title}</h5>
										<p>{(rowData.description.substring(0,100).replace(regex,''))}</p>
									</div>
								</Link>
							</li>
							))};
						
							
						
						</ul>
						}
					</div>
				</div>
				
				<div className="col-md-4">
					{ kundli.length===0 &&
							
								<center><BulletList  viewBox="1 1 200 400"></BulletList></center>
							
					}
				  {	kundli.length > 1 && 
					kundli.map((rowData, index) => (
					<div key={index+1}>
						<div className="jyt_micro_astrology-head">
							<h4>{rowData.title}</h4>
						</div>
						<div className="">
							<img src={ require(`../../assets/${rowData.kundli_image}`) } alt={rowData.title} />
							<div className="">
								<div className="">
									<p>{(rowData.description.substring(0,100).replace(regex,''))}</p>
									<Link to={'kundli/'+rowData.kundli_slug.toLowerCase()}   className="btn btn-warning btn-sm">Know more</Link>
								</div>
							</div>
						</div>
					</div>
					))};
				</div>
			</div>
		</div>
	</section>
	);	
};
export default HomeAstro_mini_service;
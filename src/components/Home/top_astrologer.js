import React from 'react';
import { Link } from 'react-router-dom';

const HomeTop_astrologer=(props)=>{
	 let topastrologer=props.data.topastrologer;
    return (
		<section className="padding">
		<div className="container">
			<div className="row mb-20">
			  <div className="col-sm-1 col-md-2"></div>
			  <div className="col-xs-12 col-sm-10 col-lg-8 text-center">
				<h2 className="text-uppercase">Our <span className="color_red">Astrologers</span></h2>
				<div className="line_1-1"></div>
				<div className="line_2-2"></div>
				<div className="line_3-3"></div>
			  </div>
			  <div className="col-sm-1 col-lg-2"></div>
			</div>
			<div className="row astor-main-inn">
				<div className="col-md-12">
					{ topastrologer.length===0 &&
							
					<center><img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" /></center>
						
					}
				   {	topastrologer.length > 1 && 
					<ul>
					  {topastrologer.map((rowData, index) => (
						<li key={index+1}>
							<div className="astor-list-n-inner">
								<Link to={'astrologer/'+rowData.slug}>
									<img src="https://astrotalk.com/assets/astro/771.jpg" alt={rowData.name} />
									<p>{rowData.name}</p>
									<span>{rowData.language_name}</span>
									<span>{rowData.expertise_name}</span>
								</Link>
							</div>
						</li>
						))};
					</ul>
					
					}
				</div>
			</div>
		</div>
	</section>);
};
export default HomeTop_astrologer;
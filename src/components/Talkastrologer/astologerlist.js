import React from 'react';
import { Link } from 'react-router-dom';
import ContentLoader, { Facebook,List  } from 'react-content-loader'
const TalkastrologerAstologerlist=(props)=>{
	let data=props.data;
	return (<div className="col-md-9">
		<div className="row">
			<div className="col-md-12">
				<div className="golabal-filter golabal-filter-drop-list">
					<p><a href="#"><i className="fa fa-filter"></i> Filter</a></p>
					<div className="dropdown-new">
						<button className="dropbtn-new">Expertise  <i className="fa fa-caret-down"></i></button>
						<div className="dropdown-content-new">	
							<ul>
								<li><label className="cont">Astrologer<input type="checkbox" value="checkbox"/><span className="checkmark"></span></label></li>
							</ul>
						</div>
					</div> 
					
					<div className="dropdown-new">
						<button className="dropbtn-new"> Languages  <i className="fa fa-caret-down"></i></button>
						<div className="dropdown-content-new">
							<ul>
								<li><label className="cont">English<input type="checkbox" value="checkbox"/><span className="checkmark"></span></label></li>
								
							</ul>
						</div>
					</div> 
					
					{/*<div className="dropdown-new">
						<button className="dropbtn-new"> Rating   <i className="fa fa-caret-down"></i></button>
						<div className="dropdown-content-new">
							<ul>
								<li><label className="cont">3 Star<input type="checkbox" value="checkbox"/><span className="checkmark"></span></label></li>
							
							</ul>
						</div>
					</div> 
					
					<div className="dropdown-new">
						<button className="dropbtn-new">Experience  <i className="fa fa-caret-down"></i></button>
						<div className="dropdown-content-new">
							<ul>
								<li><label className="cont">0 To 5 Years<input type="checkbox" value="checkbox"/><span className="checkmark"></span></label></li>
								
							</ul>
						</div>
					</div> 
					<div className="dropdown-new">
						<button className="dropbtn-new">Price   <i className="fa fa-caret-down"></i></button>
						<div className="dropdown-content-new">
							<ul>
								<li><label className="cont">Price doesn't matter<input type="checkbox" value="checkbox"/><span className="checkmark"></span></label></li>
								
							</ul>
						</div>
					</div>*/} 


				</div>
			</div>
		</div>
		<div className="row">
		{ data.length==0 &&
			<center><img style={{ height: '20px',width: '20px' }}  src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
			</center>				
		}
				
		{ data.length>0  &&
			data.map((rowData, index) => (
			
			
			<div key={index+1} className="col-md-4 ap-pad">
				<div className="astro-profile-box">
					<div className="astro-pic">
						<Link to={rowData.slug}><img src="https://astrotalk.com/assets/astro/771.jpg" alt="" /></Link>
						<div className="astro-star">
							<span className="fa fa-star checked"></span>
							<span className="fa fa-star checked"></span>
							<span className="fa fa-star checked"></span>
							<span className="fa fa-star checked"></span>
							<span className="fa fa-star checked"></span>
						</div>
					</div>
					<div className="astro-r-n">
							<div className="astro-name">
								<p><Link to={'astrologer/'+rowData.slug}>{rowData.name}</Link></p>
							</div>
							<div className="astro-p-deatil">
								<p>{rowData.expertise_name}</p>
								<p>{rowData.language_name}</p>
								<p>Exp: {rowData.experience} Years</p>
								<p>{rowData.name}</p>
							</div>
					</div>
					<div className="astro--actin-btn">
						<span className="astro-price-r"><div className="astro-price">₹{rowData.chat_price}/Min</div><a onClick={e =>props.checkAstro(rowData.id,'chat',rowData)}><i className="fa fa-comment"></i> chat</a></span>
						<span className="astro-price-b"><div className="astro-price">₹{rowData.call_price}/Min</div><a onClick={e =>props.checkAstro(rowData.id,'call',rowData)}><i className="fa fa-phone"></i> Call </a></span>
						<span className="astro-price-g"><div className="astro-price">₹{rowData.report_price}</div><a   onClick={e =>props.checkAstro(rowData.id,'report',rowData)}><i className="fa fa-book"></i> Report</a></span>
					</div>
				</div>
			</div>
	
		))}
		</div>
	</div>)
};
export default TalkastrologerAstologerlist;
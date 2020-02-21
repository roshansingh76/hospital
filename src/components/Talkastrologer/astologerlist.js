import React from 'react';
import { Link } from 'react-router-dom';

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
								<li><label className="cont">Palmistry<input type="checkbox" value="checkbox"/><span className="checkmark"></span></label></li>
								<li><label className="cont">Gems Stone<input type="checkbox" value="checkbox"/><span className="checkmark"></span></label></li>
								<li><label className="cont">Vastu Consultant<input type="checkbox" value="checkbox"/><span className="checkmark"></span></label></li>
								<li><label className="cont">Palmistry<input type="checkbox" value="checkbox"/><span className="checkmark"></span></label></li>
								<li><label className="cont">Feng Shui<input type="checkbox" value="checkbox"/><span className="checkmark"></span></label></li>
								<li><label className="cont">Tarot card reader<input type="checkbox" value=""/><span className="checkmark"></span></label></li>
							</ul>
						</div>
					</div> 
					
					<div className="dropdown-new">
						<button className="dropbtn-new"> Languages  <i className="fa fa-caret-down"></i></button>
						<div className="dropdown-content-new">
							<ul>
								<li><label className="cont">English<input type="checkbox" value="checkbox"/><span className="checkmark"></span></label></li>
								<li><label className="cont">Hindi<input type="checkbox" value="checkbox"/><span className="checkmark"></span></label></li>
							</ul>
						</div>
					</div> 
					
					<div className="dropdown-new">
						<button className="dropbtn-new"> Rating   <i className="fa fa-caret-down"></i></button>
						<div className="dropdown-content-new">
							<ul>
								<li><label className="cont">3 Star<input type="checkbox" value="checkbox"/><span className="checkmark"></span></label></li>
								<li><label className="cont">4 Star<input type="checkbox" value="checkbox"/><span className="checkmark"></span></label></li>
								<li><label className="cont">4 Star<input type="checkbox" value="checkbox"/><span className="checkmark"></span></label></li>
							</ul>
						</div>
					</div> 
					
					<div className="dropdown-new">
						<button className="dropbtn-new">Experience  <i className="fa fa-caret-down"></i></button>
						<div className="dropdown-content-new">
							<ul>
								<li><label className="cont">0 To 5 Years<input type="checkbox" value="checkbox"/><span className="checkmark"></span></label></li>
								<li><label className="cont">5 To 10 Years<input type="checkbox" value="checkbox"/><span className="checkmark"></span></label></li>
								<li><label className="cont">10 To 15 Years<input type="checkbox" value="checkbox"/><span className="checkmark"></span></label></li>
								<li><label className="cont">15 To 20 Years<input type="checkbox" value="checkbox"/><span className="checkmark"></span></label></li>
							</ul>
						</div>
					</div> 
					<div className="dropdown-new">
						<button className="dropbtn-new">Price   <i className="fa fa-caret-down"></i></button>
						<div className="dropdown-content-new">
							<ul>
								<li><label className="cont">Price doesn't matter<input type="checkbox" value="checkbox"/><span className="checkmark"></span></label></li>
								<li><label className="cont">Upto ₹20/Min<input type="checkbox" value="checkbox"/><span className="checkmark"></span></label></li>
								<li><label className="cont">Between ₹20 - ₹50/Min<input type="checkbox" value="checkbox"/><span className="checkmark"></span></label></li>
								<li><label className="cont">Above ₹50/Min<input type="checkbox" value="checkbox"/><span className="checkmark"></span></label></li>
							</ul>
						</div>
					</div> 
				</div>
			</div>
		</div>
		<div className="row">
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
								<p><Link to={rowData.slug}>{rowData.name}</Link></p>
							</div>
							<div className="astro-p-deatil">
								<p>{rowData.expertise_name}</p>
								<p>{rowData.language_name}</p>
								<p>Exp: {rowData.exp} Years</p>
								<p>{rowData.name}</p>
							</div>
					</div>
					<div className="astro--actin-btn">
						<span className="astro-price-r"><div className="astro-price">₹{rowData.chatprice}/Min</div><Link onClick={e =>props.checkAstro(rowData.id,'chat')}>chat</Link></span>
						<span className="astro-price-b"><div className="astro-price">₹{rowData.callprice}/Min</div><Link onClick={e =>props.checkAstro(rowData.id,'call')}> Call </Link></span>
						<span className="astro-price-g"><div className="astro-price">₹{rowData.reportprice}</div><Link   onClick={e =>props.checkAstro(rowData.id,'report')}> Get Report</Link></span>
					</div>
				</div>
			</div>
	
		))};
		</div>
	</div>)
};
export default TalkastrologerAstologerlist;
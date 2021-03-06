import React from 'react';
import { Link } from 'react-router-dom';
import ContentLoader, { Facebook,List  } from 'react-content-loader'
import Moment from 'react-moment';
import signimg from '../../assets/horoscope/aries.png';

const Singledetail=(props)=>{
		 let imageUrl='';
		 if(props.data.mphoto){
			
			 imageUrl=props.data.mphoto;
		 }
		return (
			<div className="horo-detail-page">
				<div className="horosc-headd">
					{
						 imageUrl &&
						 
						<img src ={ require(`../../assets/horoscope/${imageUrl}`) } alt={ props.data.sunsign }/>
					}
					<p>{ props.data.sunsign }</p>
					<span><Moment format="DD, dddd ,MMM, YYYY" ></Moment></span>
				</div>
				<div className="horosc-sing-content">
					
					<p>
						<strong>Personal Life :</strong> {props.data.details.personal_life}
					</p>
					<p>
						<strong>Profession :</strong> {props.data.details.profession}
					</p>
					<p>
						<strong>Health :</strong> {props.data.details.health}
					</p>
					<p>
						<strong>Travel :</strong> {props.data.details.travel}
					</p>
					<p>
						<strong>Luck :</strong> {props.data.details.luck}
					</p>
					<p>
						<strong>emotions :</strong> {props.data.details.emotions}
					</p>
				</div>
			</div>
		
		)
};
export default Singledetail;
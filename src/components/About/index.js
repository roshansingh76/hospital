import React,{Component}from 'react';
import { Link } from 'react-router-dom';


class About extends Component{
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		console.log('dddddd');
	}
 render(){

		return(
			<React.Fragment>
				<section className="padding">
					<div className="container">
						<div className="row">
							<p>Jyotirvid is the most genuine online destination for all kinds of astrological services. We make sure to connect you with tried and tested, highly professional predictors who are experts of the occult science. </p>
							<p>Keeping the demand and necessities of astrology, numerology and tarot card solutions we have come up with the most streamlined online presence of predictors, Priests, Astrologers, Numerologists and Tarot- Card Readers etc. </p>
							<p>Chat or talk with predictors, get online Shubh Muhurat, Micro Vastu reports, Handmade Kundli and seek all your answers about your future predictions related to Marriage, love life, Career or Health .</p>
						</div>
					</div>
				</section>
			</React.Fragment>
		);
 }

}
export default About;
import React,{Component}from 'react';
import { Link } from 'react-router-dom';
import  Horoscope_detail from './horoscope_detail';
import  Leftnave from './leftnave';


class Horoscope extends Component{
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
								<Horoscope_detail/>
								<Leftnave/>
							</div>
						</div>
				</section>
			</React.Fragment>
		);
 }

}
export default Horoscope;
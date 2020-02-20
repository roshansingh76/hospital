import React,{Component}from 'react';
import { Link } from 'react-router-dom';
import Leftnav from './leftnav';
import Astologerlist from './astologerlist';
import Astologerdetails from './astologerdetails';

class Talkastrologer extends Component{
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
							<Leftnav/>
							<Astologerlist/>
							<Astologerdetails/>
						</div>
					</div>
				</section>
			</React.Fragment>
		);
 }

}
export default Talkastrologer;
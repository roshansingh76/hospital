import React,{Component}from 'react';
import { Link } from 'react-router-dom';
import Leftnav from './../Talkastrologer/leftnav';

class Blogs extends Component{
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
							<h1>Blogs Page</h1>
						</div>
					</div>
				</section>
			</React.Fragment>
		);
 }

}
export default Blogs;
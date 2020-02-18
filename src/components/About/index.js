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
						<h1>About</h1>
						</div>
					</div>
				</section>
			</React.Fragment>
		);
 }

}
export default About;
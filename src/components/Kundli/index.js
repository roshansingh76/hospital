import React,{Component}from 'react';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import axios from "axios";
import Leftnav from './../Talkastrologer/leftnav';
import Kundlilist from './kundlilist';



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
								<Leftnav/>
								<Kundlilist/>
							</div>
						</div>
				</section>
			</React.Fragment>
		);
 }

}
export default About;
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
import Vastulist from './vastulist';
import Vastusingle from './vastusingle';



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
								<Vastusingle/>
								<Vastulist/>
							</div>
						</div>
				</section>
			</React.Fragment>
		);
 }

}
export default About;
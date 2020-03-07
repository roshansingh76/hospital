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
const url ="https://www.jyotirvid.in:3000";


class About extends Component{
	constructor(props) {
		super(props);
		  this.state = {
            vastu: [],
            loading: false,
            error: ''
        };
		  this.handleVastut = this.handleVastut.bind(this);
	}
	componentDidMount() {
			this.handleVastut();
	}
		handleVastut(){
		
		this.setState({
			loading: true,
	    });
	   fetch(url+"/api/service/geVastu")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            loading: false,
            vastu: result.data
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            loading: true,
            error
          });
        }
      )
		
	}
	render(){
		const {vastu}=this.state;
		return(
			<React.Fragment>
				<section className="padding">
						<div className="container">
							<div className="row">
								<Leftnav/>
								<Vastulist data={vastu}/>
							</div>
						</div>
				</section>
			</React.Fragment>
		);
 }

}
export default About;
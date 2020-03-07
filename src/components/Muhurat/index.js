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
import Muhuratlist from './muhuratlist';
const url ="https://www.jyotirvid.in:3000";


class Muhurat extends Component{
	constructor(props) {
		super(props);
		  this.state = {
            muhurat:[],
		    loading: false,
            error: ''
        };
	   this.handleMuhurat = this.handleMuhurat.bind(this);

	
	}
	componentDidMount() {
		this.handleMuhurat();
	}
	handleMuhurat(){
		this.setState({
			loading: true,
	    });
	   fetch(url+"/api/service/getMuhuruat")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            loading: false,
            muhurat: result.data
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
	let {muhurat}=this.state; 
		return(
			<React.Fragment>
				<section className="padding">
						<div className="container">
							<div className="row">
								<Leftnav/>
								<Muhuratlist data={muhurat}/>
							</div>
						</div>
				</section>
			</React.Fragment>
		);
 }

}
export default Muhurat;
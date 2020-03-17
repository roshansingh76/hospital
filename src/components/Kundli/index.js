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

const url ="https://www.jyotirvid.in";

class Kundli extends Component{
	constructor(props) {
		super(props);
		
		this.state = {
     	    kundli:[],
            loading: false,
            error: ''
        };
		   this.handleKundli = this.handleKundli.bind(this);
	}
	componentDidMount() {
		this.handleKundli();
	}
	handleKundli(){
		this.setState({
			loading: true,
	    });
	   fetch(url+"/api/service/getHandKundalis")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            loading: false,
            kundli: result.data
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
		  let {kundli}=this.state; 
		return(
			<React.Fragment>
				<section className="padding">
						<div className="container">
							<div className="row">
								<Leftnav/>
								<Kundlilist data={kundli} />
							</div>
						</div>
				</section>
			</React.Fragment>
		);
    }

}
export default Kundli;
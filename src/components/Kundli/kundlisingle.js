import React,{Component}from 'react';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import Leftnav from './../Talkastrologer/leftnav';

class Kundlisingle extends Component{
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
								
				<div className="col-md-9">
					<div className="mu-vas-wapp">
						<div className="img-text">
							<img src="/static/media/BUYING_P.508f0fb5.png" alt="image"/>
							<span>Make a purchase</span>
						</div>
						<div className="contten-m-v">
							<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
							<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.ently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

							<button type="button" class="mob-btn">Get an Enquiry</button>
						</div>
					</div>
					
				</div>
							</div>
						</div>
				</section>
			
			</React.Fragment>
		);
 }

}
export default Kundlisingle;
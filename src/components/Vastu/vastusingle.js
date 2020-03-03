import React,{Component}from 'react';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  useParams
} from "react-router-dom";

class Vastusingle extends Component{
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		console.log('dddddd');
	}
 render(){

		return(
			<React.Fragment>
				<div className="col-md-9">
					<div className="mu-vas-wapp">
						<div className="img-text">
							<img src="/static/media/Vaastu_for_Temple_at_home.4bd357c2.png" alt="image"/>
							<span>Vastu for Temple at home</span>
						</div>
						<div className="contten-m-v">
							<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
							<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.ently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

							<button type="button" class="mob-btn">Get an Enquiry</button>
						</div>
					</div>
					
				</div>
			</React.Fragment>
		);
 }

}
export default Vastusingle;
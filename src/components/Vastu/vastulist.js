import React,{Component}from 'react';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  useParams
} from "react-router-dom";

class Vastulist extends Component{
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
					<h3>Choose Your Best Vastu</h3>
					<div className="Muhuratlist-react-se">
						<ul>
							<li><a href="#">
								<div className="comm-img">
									<img src="/static/media/Vaastu_for_Bedroom2.31dca0bc.png" alt="Make a purchase" />
								</div>
								<p>Vastu for Bedroom</p>
								</a>
							</li>

							<li><a href="#">
								<div className="comm-img">
									<img src="http://localhost:3000/static/media/Vaastu_for_Temple_at_home.4bd357c2.png" alt="Make a purchase" />
								</div>
								<p>Vastu for Temple at home</p>
								</a>
							</li>

							<li><a href="#">
								<div className="comm-img">
									<img src="http://localhost:3000/static/media/Vastu_for_the_Pre-_Construction.c4a0fce7.png" alt="Make a purchase" />
								</div>
								<p>Make a purchase</p>
								</a>
							</li>

							<li><a href="#">
								<div className="comm-img">
									<img src="http://localhost:3000/static/media/Land.0e789ec3.png" alt="Make a purchase" />
								</div>
								<p>Make a purchase</p>
								</a>
							</li>

							<li><a href="#">
								<div className="comm-img">
									<img src="http://localhost:3000/static/media/Office_space.4808ca89.png" alt="Make a purchase" />
								</div>
								<p>Make a purchase</p>
								</a>
							</li>

							<li><a href="#">
								<div className="comm-img">
									<img src="http://localhost:3000/static/media/business.6f5a5202.png" alt="Make a purchase" />
								</div>
								<p>Make a purchase</p>
								</a>
							</li>

							<li><a href="#">
								<div className="comm-img">
									<img src="http://localhost:3000/static/media/Equity_Shares.a9d76f2e.png" alt="Make a purchase" />
								</div>
								<p>Make a purchase</p>
								</a>
							</li>

							<li><a href="#">
								<div className="comm-img">
									<img src="http://localhost:3000/static/media/Jewellery.92fb27db.png" alt="Make a purchase" />
								</div>
								<p>Make a purchase</p>
								</a>
							</li>

							<li><a href="#">
								<div className="comm-img">
									<img src="/static/media/BUYING_P.508f0fb5.png" alt="Make a purchase" />
								</div>
								<p>Make a purchase</p>
								</a>
							</li>

							<li><a href="#">
								<div className="comm-img">
									<img src="/static/media/BUYING_P.508f0fb5.png" alt="Make a purchase" />
								</div>
								<p>Make a purchase</p>
								</a>
							</li>

						</ul>
					</div>
				</div>
			</React.Fragment>
		);
 }

}
export default Vastulist;
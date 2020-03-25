import React,{Component}from 'react';
import { Link } from 'react-router-dom';
import Profilenav from './profilenav';
import Profileedit from './profileedit';
import Recharge from './recharge';
import Userwallet from './userwallet';
import Customercare from './customercare';
import Callhistory from './callhistory';

class Setting extends Component{
constructor(props) {
	super(props);
	if(localStorage.getItem('token')===''){
		this.props.history.push('/');	
		}
}

	render(){
		
			return(
				
				<section className="padding">
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<div className="tab-v1">
									<Profilenav/>
									<div className="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
										<Recharge/>
										<Profileedit/>
										<Callhistory/>
										<Userwallet/>
										<Customercare/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

			);
			
	}
}
export default Setting;
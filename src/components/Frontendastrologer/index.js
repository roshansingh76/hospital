import React,{Component}from 'react';
import { Link } from 'react-router-dom';

class AstrologerHome extends Component{
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
								
							</div>
						</div>
					</div>
				</section>

			);
			
	}
}
export default AstrologerHome;
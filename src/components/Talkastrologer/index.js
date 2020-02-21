import React,{Component,Fragment}from 'react';
import { Link } from 'react-router-dom';
import Leftnav from './leftnav';
import Astologerlist from './astologerlist';
import Astologerdetails from './astologerdetails';
import config from '../../config/config';
class Talkastrologer extends Component{
	constructor(props) {
		super(props);
		this.state={
				astrolist:[],
				token:'',
				userId:'',
				authFlag:false,
		};
	   this.getAllAstrologer = this.getAllAstrologer.bind(this);
	   this.checkUser = this.checkUser.bind(this);
	}
	componentDidMount() {
		this.getAllAstrologer();
	}
	checkUser(astroId,type){
			if(!this.state.token && !this.state.userId){
				this.setState({
					authFlag:true 
				});
			}else{
				this.setState({
					authFlag:true 
				});
			}
			
	}
	getAllAstrologer(){
		this.setState({
			loading:false
		});
	
		config.get('/api/astro/getAstrologerlist',{
			withCredentials:false
		})
		.then((res) => {
		this.setState({ loading: false });
		 if(res.data.success){
				this.setState({ 
					loading: false,
					error:'',
					astrolist:res.data.result,
					
				});
			
				
		 }else{
			this.setState({ 
					loading: false,
					error:res.data.message
			}); 
		 }
		}).catch((error) => {
		  if (error.response) {
					this.setState({ 
						loading: false,
						error:error.response.data.message
					});
		  } else if (error.request) {
			  this.setState({ 
						loading: false,
						error:error.message
				});
		  }
	});
		
	}
 render(){
			let {astrolist,authFlag}=this.state; 
		return(
			<Fragment>
				<section className="padding">
					<div className="container">
						<div className="row">
							<Leftnav/>
							{
							!authFlag &&
								<Astologerlist data={astrolist} checkAstro={this.checkUser}/>
							}
							{
							authFlag &&
	<h1>asdhjkashdjkashjkdhas</h1>
							}
						</div>
					</div>
				</section>
			</Fragment>
		);
 }

}
export default Talkastrologer;
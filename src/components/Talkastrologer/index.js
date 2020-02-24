import React,{Component,Fragment}from 'react';
import { Link } from 'react-router-dom';
import Leftnav from './leftnav';
import Astologerlist from './astologerlist';
import Astologerdetails from './astologerdetails';
import LoginPage from './../Login/FrontendLogin';
import config from '../../config/config';
import { facebookConfig, googleConfig } from '../../config/social-config';


class Talkastrologer extends Component{
	constructor(props) {
		super(props);
		this.state={
				astrolist:[],
				token:'',
				userId:'',
				authFlag:false,
				modalIsOpen: true,
				loading: false,
				error: '',
				mobile:'',
				flagMobilecontainer:true,
				flagOtpcontainer:false
		};
	    this.getAllAstrologer = this.getAllAstrologer.bind(this);
		this.checkUser = this.checkUser.bind(this);
		this.openModal = this.openModal.bind(this);
		this.afterOpenModal = this.afterOpenModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.updateMobile = this.updateMobile.bind(this);
		this.sendotpMobile = this.sendotpMobile.bind(this);
	
	}
	
	  openModal() {
		 this.setState({modalIsOpen: true});
	  }
	 
	  afterOpenModal() {
		// references are now sync'd and can be accessed.
		this.subtitle.style.color = '#f00';
	  }
	 
	  closeModal() {
	
		this.setState({modalIsOpen: false,error:''});
	  }
	componentDidMount() {
	
		this.getAllAstrologer();
	}
	checkUser(astroId,type){
		if(!this.state.token && !this.state.userId){
			this.setState({
				authFlag:true
			});
			this.openModal();
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
	sendotpMobile(){
		if(!this.state.mobile){
			this.setState({
				error: 'Enter Mobile Number'
			});
			return false;
		}
	
	 this.setState({ loading: true });
	 config.get('/api/user/getOtp?phone='+this.state.mobile)
	   .then((res) => {
		   this.setState({ loading: false });
			if(res.data.success){
				   this.setState({ 
					   loading: false,
					   flagMobilecontainer:false,
					   flagOtpcontainer:true,
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
			 }else{
				 
			 }
	   });
	}
	updateMobile(event){
		this.setState({
			mobile: event.target.value
		});
		
		
	}
	render(){
		let {astrolist,authFlag,loading,modalIsOpen}=this.state; 
		return(
			<Fragment>
				<section className="padding">
					<div className="container">
						<div className="row">
							<Leftnav/>
							{loading &&
								<img style={{ height: '25px',width: '25px' }}  src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
							}
							{
							 Astologerlist.length>0 &&
								<Astologerlist data={astrolist} checkAstro={this.checkUser}/>
							 }
							{
							 astrolist.length==0 &&
								<h1>Data Not Found</h1>
							}
							{
						 	authFlag &&
								<LoginPage data={this.state} closeModal={this.closeModal}  sendOtp={this.sendotpMobile} handleChange={this.updateMobile}/>		
							}
						</div>
					</div>
				</section>
			</Fragment>
		);
 }

}
export default Talkastrologer;
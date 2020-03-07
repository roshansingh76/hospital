import React,{Component,Fragment}from 'react';
import { Link,browserHistory  } from 'react-router-dom';
import Leftnav from './leftnav';
import Astologerlist from './astologerlist';
import Astologerdetails from './astologerdetails';
import LoginPage from './../Login/FrontendLogin';
import config from '../../config/config';
import { facebookConfig, googleConfig } from '../../config/social-config';
import deviceStorage from '../../config/deviceStorage';
const url ="https://www.jyotirvid.in:3000";
class Talkastrologer extends Component{
	constructor(props) {
		super(props);
		this.state={
				astrolist:[],
				token:localStorage.getItem('token'),
				userId:'',
				authFlag:false,
				modalIsOpen:false,
				loading: false,
				loader: false,
				error: '',
				mobile:'',
				flagMobilecontainer:true,
				flagOtpcontainer:false,
				flagSignin:false,
				otp:'',
				success:'',
				errorStyle:false,
				hasErrored:false
		};
	    this.getAllAstrologer = this.getAllAstrologer.bind(this);
		this.checkUser = this.checkUser.bind(this);
		this.openModal = this.openModal.bind(this);
		this.afterOpenModal = this.afterOpenModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.formdata = this.formdata.bind(this);
		this.sendotpMobile = this.sendotpMobile.bind(this);
		this.changeContact = this.changeContact.bind(this);
		this.userSignin = this.userSignin.bind(this);
		this.vfyOtp = this.vfyOtp.bind(this);
		this.changeOtp = this.changeOtp.bind(this)
		this.changeOtp = this.changeOtp.bind(this)
		this.sendOtpagain = this.sendOtpagain.bind(this)
		
		
	
	}
	
	  openModal() {
		 this.setState({modalIsOpen: true});
		 
	  }
	 
	  afterOpenModal() {
		// references are now sync'd and can be accessed.
		this.subtitle.style.color = '#f00';
	  }
	 
	  closeModal() {
		this.setState({ 
			loader: false,
			flagMobilecontainer:true,
			flagOtpcontainer:false,
			flagSignin:false,
			modalIsOpen:false,
			mobile:'',
			otp:'',
			error:''
		});
	  }
	componentDidMount() {
		this.setState({ 
				token:localStorage.getItem('token'),
			
		
		});
		this.getAllAstrologer();
	}
	checkUser(astroId,type){
		if(!this.state.token && !this.state.userId){
			this.setState({
				authFlag:true,
				modalIsOpen:true
			});
			this.openModal();
		}else{
			 this.props.history.push('/callingpack')

		}
		
	}
	getAllAstrologer(){
		this.setState({
			loading:false
		});
		
	  fetch(url+"/api/astro/getAstrologerlist")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            loading: false,
            astrolist: result.result
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
	sendOtpagain(){
		 this.setState({ loader: true,success:'' });
		 config.get('/api/user/getOtp?phone='+this.state.mobile)
	   .then((res) => {
		   this.setState({ loader: false });
			if(res.data.success){
				   this.setState({ 
					   loader: false,
					   flagMobilecontainer:false,
					   flagOtpcontainer:true,
					   success:'Check Mobile  Otp send successfully!'
				   });
			}else{
			   this.setState({ 
					   loader: false,
					   error:res.data.message
			   }); 
			}
		   }).catch((error) => {
			 if (error.response) {
					   this.setState({ 
						   loader: false,
						   error:error.response.data.message
					   });
			 } else if (error.request) {
				 this.setState({ 
						   loader: false,
						   error:error.message
				   });
			 }else{
				 
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
     var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
	if(this.state.mobile.match(phoneno)) {
	  
	 this.setState({ loader: true,error:'',success:'' });
	 config.get('/api/user/getOtp?phone='+this.state.mobile)
	   .then((res) => {
		   this.setState({ loader: false });
			if(res.data.success){
				   this.setState({ 
					   loader: false,
					   flagMobilecontainer:false,
					   flagOtpcontainer:true,
				   });
			}else{
			   this.setState({ 
					   loader: false,
					   error:res.data.message
			   }); 
			}
		   }).catch((error) => {
			 if (error.response) {
					   this.setState({ 
						   loader: false,
						   error:error.response.data.message
					   });
			 } else if (error.request) {
				 this.setState({ 
						   loader: false,
						   error:error.message
				   });
			 }else{
				 
			 }
	   });
	}else{
		this.setState({
				error: 'Enter Valid Mobile Number'
			});	
		
	}
	}
	formdata(e){
		let change = {}
		change[e.target.name] = e.target.value
		this.setState(change)
		
		
	}
	
	changeContact(){
		this.setState({ 
			loader: false,
			flagMobilecontainer:true,
			flagOtpcontainer:false,
			mobile:'',
			otp:''
		});
	}
	vfyOtp(){
		if(!this.state.otp){
			this.setState({
				hasErrored:true,
				errorStyle:true
			});
			return false;
			
		}
	 let length=this.state.otp.length;
	 if(length<4){
			this.setState({
				hasErrored:true,
				errorStyle:true
			});
			return false;
			
		}
	
		let otp=this.state.otp.toString();
		otp=otp.replace(/,/g, "");
		this.setState({ 
			loader: true,
			success:''
		});
		config.get('/api/user/verifyOtp?phone='+this.state.mobile+'&otp='+otp)
	   .then((res) => {
		   this.setState({ loader: false });
			if(res.data.success){
				   this.setState({ 
					   loader: false,
					});
					
					deviceStorage.saveItem('token',res.data.token);
					window.location.href=window.location.href;
			}else{
			   this.setState({ 
					   loader: false,
						hasErrored:true,
						error:res.data.message
			   }); 
			}
		   }).catch((error) => {
			 if (error.response) {
				 this.state.otp=[];
					   this.setState({ 
						   loader: false,
							error:error.response.data.message
					   });
			 } else if (error.request) {
				  this.state.otp=[];
				 this.setState({ 
						   loader: false,
							error:error.request.data.message
				   });
			 }else{
				 
			 }
	   });
	}
	userSignin(){
		this.setState({ 
			loader: false,
			flagMobilecontainer:false,
			flagOtpcontainer:false,
			flagSignin:true,
			mobile:'',
		    otp:''
		});
	}
	changeOtp(e){
		this.setState({ 
			hasErrored:false,
		}); 
	  this.setState({
			otp:e
	  })
	}
	render(){
		let {astrolist,authFlag,loading,loader,modalIsOpen}=this.state; 
	
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
						 	authFlag &&
							<LoginPage 
							data={this.state}
							closeModal={this.closeModal} 
							sendOtp={this.sendotpMobile} 
							handleChange={this.formdata}
							changeMobile={this.changeContact} 
							verifyOtp={this.vfyOtp}
							signin={this.userSignin}
							handleChangeOtp={this.changeOtp}
							resendOtp={this.sendOtpagain}
							/>		
							}
						</div>
					</div>
				</section>
			</Fragment>
		);
 }

}
export default Talkastrologer;
import React,{Component,Fragment}from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import axios from 'axios'
import * as ROUTES from '../../../config/routes';
import login from '../../Login/LoginClass';
import LoginPage from './../../Login/FrontendLogin';
import config from './../../../config/config';
import deviceStorage from './../../../config/deviceStorage';
import validator from 'validator' 
const url ="https://www.jyotirvid.in:3000";



class Mainnav extends Component{
	constructor(props) {
		super(props);
			this.state={
				isAuthenticated:localStorage.getItem('token'),
				userId:'',
				name:localStorage.getItem('name'),
				wallet:localStorage.getItem('wallet'),
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
		this.closeModal = this.closeModal.bind(this);
		this.formdata = this.formdata.bind(this);
		this.sendotpMobile = this.sendotpMobile.bind(this);
		this.changeContact = this.changeContact.bind(this);
		this.userSignin = this.userSignin.bind(this);
		this.vfyOtp = this.vfyOtp.bind(this);
		this.changeOtp = this.changeOtp.bind(this)
		this.changeOtp = this.changeOtp.bind(this)
		this.sendOtpagain = this.sendOtpagain.bind(this)
		this.mainopenModal=this.mainopenModal.bind(this);
		this.validatePhoneNumber=this.validatePhoneNumber.bind(this);
	}
	
	componentDidMount() {
		this.setState({ 
				isAuthenticated:localStorage.getItem('token'),
			
		
		});
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
	mainopenModal(){
		this.setState({ 
			loader: false,
			authFlag:true,
			flagMobilecontainer:true,
			flagOtpcontainer:false,
			flagSignin:false,
			modalIsOpen:true,
			mobile:'',
			otp:'',
			error:''
		});
	}
	sendOtpagain(){
		 this.setState({ loader: true,success:'' });
		axios.get(url+'/api/user/getOtp?phone='+this.state.mobile)
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
	validatePhoneNumber = (number) => {
	 const isValidPhoneNumber = validator.isMobilePhone(number)
	 return (isValidPhoneNumber)
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
	axios.get(url+'/api/user/getOtp?phone='+this.state.mobile)
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
		axios.get(url+'/api/user/verifyOtp?phone='+this.state.mobile+'&otp='+otp)
	   .then((res) => {
		   this.setState({ loader: false });
			if(res.data.success){
				   this.setState({ 
					   loader: false,
					});
					
					deviceStorage.saveItem('token',res.data.token);
					deviceStorage.saveItem('name',res.data.name);
					deviceStorage.saveItem('email',res.data.email);

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
		const {authFlag,isAuthenticated,name,wallet}=this.state;
		
		return (
		<Fragment>
			<header id="header" className="header header-main educare-header navbar-main">
				<nav className="navbar navbar-expand-lg bg-dark navbar-dark  custom-larg">
					<div className="container">
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
							<span className="navbar-toggler-icon"></span>
						</button>
						<ul className="unstyled  d-sm-none d-md-none d-lg-none d-xl-none">
							<li><Link to="sign-in.html">Login</Link></li>
							<li><Link to="register.html">Register</Link></li>
							<li className="nav-item dropdown">
								<Link  to="#" id="navbardrop" data-toggle="dropdown">
								{name}({wallet}) <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg" width="30" className="rounded-circle z-depth-0" alt="avatar image" />  
								</Link>
								<div className="dropdown-menu dropdown-menu-lin">
									<Link className="dropdown-item" to="#">Profile</Link>
									<Link className="dropdown-item" to="#">Logout</Link>
								</div>
							</li>
						</ul>
					  <div className="collapse navbar-collapse " id="collapsibleNavbar">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item active"><Link to={ROUTES.Home} className="nav-link">Home</Link></li>
							<li className="nav-item "><Link to={ROUTES.Talkastrologer} className="nav-link">Prediction</Link></li>
							{/*<li className="nav-item dropdown">
								<Link className="nav-link dropdown-toggle" to="#" id="navbardrop" data-toggle="dropdown">
								Services
								</Link>
								<div className="dropdown-menu">
									<Link className="dropdown-item" to="#">Career</Link>
									<Link className="dropdown-item" to="#">Love & Relationship</Link>
									<Link className="dropdown-item" to="#">Health</Link>
								</div>
							</li>*/}
							<li className="nav-item"><Link to={ROUTES.MuhuratList} className="nav-link">Muhurat</Link></li>
							<li className="nav-item"><Link to={ROUTES.VastuList} className="nav-link">Vastu</Link></li>
							<li className="nav-item"><Link to={ROUTES.KundliList} className="nav-link">Kundli</Link></li>
							<li className="nav-item"><Link to={ROUTES.Horoscopesdefault+'/aries'} className="nav-link">Horoscope</Link></li>
							<li className="nav-item"><Link to={ROUTES.About} className="nav-link">About</Link></li>
						</ul>
					  </div> 
					   <ul className="unstyled d-none d-sm-block">
						  { !isAuthenticated &&
							<li><a onClick={this.mainopenModal}>Login</a></li>
						  }
						  {isAuthenticated &&
							<li className="nav-item dropdown">
								<Link  to="#" id="navbardrop" data-toggle="dropdown">
								{name}({wallet}) <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg" width="30" className="rounded-circle z-depth-0" alt="avatar image" />  
								</Link>
								<div className="dropdown-menu dropdown-menu-lin">
									<Link to={'/users/myaccount'} className="dropdown-item" >Profile</Link>
									<a className="dropdown-item" onClick={deviceStorage.deleteJWT}>Logout</a>
								</div>
							</li>
						  }
						</ul>
					</div>
				</nav>
				{
					this.state.authFlag &&
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
			</header>
			</Fragment>		
	
	)}
	
}



$(window).scroll(function () {
  if ($(window).scrollTop() > 63) {
    $('.navbar').addClass('navbar-fixed');
  }
  if ($(window).scrollTop() < 64) {
    $('.navbar').removeClass('navbar-fixed');
  }
});



export default Mainnav;
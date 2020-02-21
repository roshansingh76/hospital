import React,{Component,Fragment}from 'react';
import { Link } from 'react-router-dom';
import ReactModalLogin from "react-modal-login";
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
				showModal: false,
				loading: false,
				error: null
		};
	   this.getAllAstrologer = this.getAllAstrologer.bind(this);
	   this.checkUser = this.checkUser.bind(this);
	}
  openModal() {
    this.setState({
      showModal: true
    });
  }
 
  closeModal() {
    this.setState({
      showModal: false,
      error: null
    });
  }
 
  onLoginSuccess(method, response) {
    console.log("logged successfully with " + method);
  }
 
  onLoginFail(method, response) {
    console.log("logging failed with " + method);
    this.setState({
      error: response
    });
  }
 
  startLoading() {
    this.setState({
      loading: true
    });
  }
 
  finishLoading() {
    this.setState({
      loading: false
    });
  }
 
  afterTabsChange() {
    this.setState({
      error: null
    });
  }
	componentDidMount() {
		this.getAllAstrologer();
	}
	checkUser(astroId,type){
			if(!this.state.token && !this.state.userId){
				this.setState({
     					 authFlag: true
				});
				this.openModal();
			}else{
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
 render(){
			let {astrolist,authFlag}=this.state; 
		return(
			<Fragment>
				<section className="padding">
					<div className="container">
						<div className="row">
							<Leftnav/>
							
								<Astologerlist data={astrolist} checkAstro={this.checkUser}/>
							
							{
							authFlag &&
								
						        <ReactModalLogin
						          visible={this.state.showModal}
						          onCloseModal={this.closeModal.bind(this)}
						          loading={this.state.loading}
						          error={this.state.error}
						          tabs={{
						            afterChange: this.afterTabsChange.bind(this)
						          }}
						          loginError={{
						            label: "Couldn't sign in, please try again."
						          }}
						          registerError={{
						            label: "Couldn't sign up, please try again."
						          }}
						          startLoading={this.startLoading.bind(this)}
						          finishLoading={this.finishLoading.bind(this)}
						        providers={{
						            facebook: {
						              config:'',
						              onLoginSuccess: this.onLoginSuccess.bind(this),
						              onLoginFail: this.onLoginFail.bind(this),
						              label: "Continue with Facebook"
						            },
					              google: {
						              config:'',
						              onLoginSuccess: this.onLoginSuccess.bind(this),
						              onLoginFail: this.onLoginFail.bind(this),
						              label: "Continue with Google"
						            }

						          }}
						          form={{
						          		loginInputs:{
						          			type :'text',
						          			name:'mobile',

						          		},
						          		loginBtn:{
						          			label:'Send OTP'
						          		},
						          		
						      	    }}

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
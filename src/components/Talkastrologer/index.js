import React,{Component,Fragment}from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import Leftnav from './leftnav';
import Astologerlist from './astologerlist';
import Astologerdetails from './astologerdetails';
import config from '../../config/config';
import { facebookConfig, googleConfig } from '../../config/social-config';
const customStyles = {
  content : {
   
  }
};

class Talkastrologer extends Component{
	constructor(props) {
		super(props);
		this.state={
				astrolist:[],
				token:'',
				userId:'',
				authFlag:false,
				modalIsOpen: false,
				loading: false,
				error: ''
		};
	   this.getAllAstrologer = this.getAllAstrologer.bind(this);
	   this.checkUser = this.checkUser.bind(this);
	   this.openModal = this.openModal.bind(this);
	   this.afterOpenModal = this.afterOpenModal.bind(this);
	   this.closeModal = this.closeModal.bind(this);
	 
	}
	  openModal() {
		this.setState({modalIsOpen: true});
	  }
	 
	  afterOpenModal() {
		// references are now sync'd and can be accessed.
		this.subtitle.style.color = '#f00';
	  }
	 
	  closeModal() {
		this.setState({modalIsOpen: false});
	  }
	componentDidMount() {
	
		this.getAllAstrologer();
	}
	checkUser(astroId,type){
			if(!this.state.token && !this.state.userId){
				this.setState({modalIsOpen: true,authFlag:true});
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
		let {astrolist,authFlag,props}=this.state; 
		return(
			<Fragment>
				<section className="padding">
					<div className="container">
						<div className="row">
							<Leftnav/>
							
								<Astologerlist data={astrolist} checkAstro={this.checkUser}/>
							
							{
							authFlag &&
									<Modal
										isOpen={this.state.modalIsOpen}
										onAfterOpen={this.afterOpenModal}
										onRequestClose={this.closeModal}
										
										>

										<h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
										<button onClick={this.closeModal}>close</button>
										<form>
									
										</form>
									</Modal>
							}
						</div>
					</div>
				</section>
			</Fragment>
		);
 }

}
export default Talkastrologer;
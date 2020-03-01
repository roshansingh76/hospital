import React,{Component}from 'react';
import { Link } from 'react-router-dom';
import Slider from './slider';
import Service_top from './service_top';
import Top_astrologer from './top_astrologer';
import Astro_mini_service from './astro_mini_service';
import Free_horoscope from './free_horoscope';
import config from '../../config/config';
class HomePage extends Component{
	constructor(props) {
		super(props);
		  this.state = {
            vastu: [],
            muhurat:[],
		    kundli:[],
            horoscope:[],
			topastrologer:[],
            loading: false,
            error: ''
        };
	   this.handleMuhurat = this.handleMuhurat.bind(this);
	   this.handleVastut = this.handleVastut.bind(this);
	   this.handleHoroscope = this.handleHoroscope.bind(this);
	   this.handleTopastrologer = this.handleTopastrologer.bind(this);
	   this.handleKundli = this.handleKundli.bind(this);
	}
	
	componentDidMount() {
		this.handleHoroscope();
		this.handleMuhurat();
		this.handleTopastrologer();
		this.handleKundli();
		this.handleVastut();
	}
	handleTopastrologer(){
		
	config.get('/api/service/getTopAstrologers',{
			withCredentials:false
		})
		.then((res) => {
		this.setState({ loading: false });
		 if(res.data.success){
				this.setState({ 
					topastrologer:res.data.result,
					
				});
				this.handleMuhurat();
   		 }else{
			this.setState({ 
					error:res.data.message
			}); 
		 }
		}).catch((error) => {
		  if (error.response) {
					this.setState({ 
					
						error:error.response.data.message
					});
		  } else if (error.request) {
			  this.setState({ 
					
						error:error.message
				});
		  }
	});
	
	}
	handleHoroscope(){
		config.get('/api/service/getHoroscopes',{
			withCredentials:false
		})
		.then((res) => {
		this.setState({ loading: false });
		 if(res.data.success){
				this.setState({ 
					horoscope:res.data.data,
					
				});
				
   		 }else{
			this.setState({ 
					error:res.data.message
			}); 
		 }
		}).catch((error) => {
		  if (error.response) {
					this.setState({ 
					
						error:error.response.data.message
					});
		  } else if (error.request) {
			  this.setState({ 
					
						error:error.message
				});
		  }
	});
		
	}
	handleMuhurat(){
		config.get('/api/service/getMuhuruat',{
			withCredentials:false
		})
		.then((res) => {
		this.setState({ loading: false });
		 if(res.data.success){
				this.setState({ 
					muhurat:res.data.data,
					
				});
				
   		 }else{
			this.setState({ 
					error:res.data.message
			}); 
		 }
		}).catch((error) => {
		  if (error.response) {
					this.setState({ 
					
						error:error.response.data.message
					});
		  } else if (error.request) {
			  this.setState({ 
					
						error:error.message
				});
		  }
	});
	}
	handleVastut(){
		config.get('/api/service/geVastu',{
			withCredentials:false
		})
		.then((res) => {
		this.setState({ loading: false });
		 if(res.data.success){
				this.setState({ 
					vastu:res.data.data,
					
				});
				
   		 }else{
			this.setState({ 
					error:res.data.message
			}); 
		 }
		}).catch((error) => {
		  if (error.response) {
					this.setState({ 
					
						error:error.response.data.message
					});
		  } else if (error.request) {
			  this.setState({ 
					
						error:error.message
				});
		  }
	 });
	}
handleKundli(){
	
		this.kundli=[];
	config.get('/api/service/getHandKundalis',{
			withCredentials:false
		})
		.then((res) => {
		this.setState({ loading: false });
		 if(res.data.success){
				this.setState({ 
					kundli:res.data.data,
					
				});
				
   		 }else{
			this.setState({ 
					error:res.data.message
			}); 
		 }
		}).catch((error) => {
		  if (error.response) {
					this.setState({ 
					
						error:error.response.data.message
					});
		  } else if (error.request) {
			  this.setState({ 
					
						error:error.message
				});
		  }
	 });
	
}
 render(){
	   let {horoscope}=this.state; 
		return(
			<React.Fragment>
				<Slider/>
				
				<Free_horoscope  data={horoscope}/>
				<Service_top/>
				<Top_astrologer data={this.state}/>
				<Astro_mini_service data={this.state}/>
			</React.Fragment>
		);
 }

}
export default HomePage;
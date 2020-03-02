import React,{Component}from 'react';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import axios from "axios";
import  Horoscope_detail from './horoscope_detail';
import  Leftnave from './leftnave';
import config from '../../config/config';

class Horoscope extends Component{
	constructor(props) {
		super(props);
		  this.state = {
            horoscope:[],
            loading: false,
		    details: '',
			sunsign:'',
			slug:'',
			mphoto:'',
            error: ''
        };
		this.getHoroscopedetails = this.getHoroscopedetails.bind(this);
		this.assignObject = this.assignObject.bind(this);
	}

	componentDidMount() {
		let segment_str =this.props.location.pathname;
		var segment_array = segment_str.split( '/' );
		let last_segment = segment_array.pop();
		this.handleHoroscope(last_segment);
		
	}
	componentWillReceiveProps(nextProps) {
		let segment_str =this.props.location.pathname;
		var segment_array = segment_str.split( '/' );
		let last_segment = segment_array.pop();
		this.handleHoroscope(last_segment);
	}
	componentDidUpdate(prevProps) {
	  if(prevProps.value !== this.props.value) {
		this.setState({value: this.props.value});
	  }
	}
	getHoroscopedetails(){
		let segment_str =this.props.location.pathname;
		var segment_array = segment_str.split( '/' );
		let last_segment = segment_array.pop();
		let horoscope=this.state.horoscope;
		let id='';
		let img='';
		 horoscope.forEach(function(entry) {
			if(entry.sunsign_en.toLowerCase()===last_segment){
				id=entry.id;
				img=entry.mphoto;
			}
		});
		this.setState({
				mphoto:img
		});
		if(id){
			axios.get('https://rgyan.com/getJhoroscope/'+id)
			.then((res) => {
				this.assignObject(res.data.result);
				
			})
			.catch((error) => {
				console.log(error);
			});
		}
		
	}
	assignObject(obj){
	
		  
		  this.setState({ 
					sunsign:obj['sun_sign'],
					details:obj['prediction']
				});
		
	
	}
	handleHoroscope(slug){
	
		config.get('/api/service/getHoroscopes',{
			withCredentials:false
		})
		.then((res) => {
		this.setState({ loading: false });
		 if(res.data.success){
				this.setState({ 
					horoscope:res.data.data,
					
				});
				this.getHoroscopedetails();
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
	  
		return(
			<React.Fragment>
				<section className="padding">
						<div className="container">
							<div className="row">
								<Leftnave/>
								<Horoscope_detail data={this.state}/>
							
							</div>
						</div>
				</section>
			</React.Fragment>
		);
 }

}
export default Horoscope;
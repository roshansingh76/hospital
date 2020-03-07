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
import Leftnav from './../Talkastrologer/leftnav';
import config from '../../config/config';
const url ="https://www.jyotirvid.in:3000";
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
	this.setState({
			loading: true,
	    });
	   fetch(url+"/api/service/getHoroscopes")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            loading: false,
            horoscope: result.data
          });
		 this.getHoroscopedetails();
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
 render(){
	  
		return(
			<React.Fragment>
				<section className="padding">
						<div className="container">
							<div className="row">
								<Leftnav  data={this.state}/>
								<Horoscope_detail data={this.state}/>
							
							</div>
						</div>
				</section>
			</React.Fragment>
		);
 }

}
export default Horoscope;
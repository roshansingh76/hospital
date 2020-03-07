import React,{Component}from 'react';
import { Link } from 'react-router-dom';
import Slider from './slider';
import Service_top from './service_top';
import Top_astrologer from './top_astrologer';
import Astro_mini_service from './astro_mini_service';
import Free_horoscope from './free_horoscope';
import config from '../../config/config';
const url ="https://www.jyotirvid.in:3000";
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
		this.handleTopastrologer();
		this.handleMuhurat();
		this.handleVastut();
		this.handleKundli();
	}
	handleTopastrologer(){
		this.setState({
			loading: true,
	    });
	   fetch(url+"/api/service/getTopAstrologers")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            loading: false,
            topastrologer: result.result
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
	handleHoroscope(){
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
	handleMuhurat(){
		
		
		this.setState({
			loading: true,
	    });
	   fetch(url+"/api/service/getMuhuruat")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            loading: false,
            muhurat: result.data
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
	handleVastut(){
		
		this.setState({
			loading: true,
	    });
	   fetch(url+"/api/service/geVastu")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            loading: false,
            vastu: result.data
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
handleKundli(){
		
		this.setState({
			loading: true,
	    });
	   fetch(url+"/api/service/getHandKundalis")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            loading: false,
            kundli: result.data
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
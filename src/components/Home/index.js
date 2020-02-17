import React,{Component}from 'react';
import { Link } from 'react-router-dom';
import Slider from './slider';
import Service_top from './service_top';
import Top_astrologer from './top_astrologer';
import Astro_mini_service from './astro_mini_service';
import Free_horoscope from './free_horoscope';

class HomePage extends Component{
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		console.log('dddddd');
	}
 render(){

		return(
			<React.Fragment>
				<Slider/>
				<Service_top/>
				<Top_astrologer from/>
				<Free_horoscope/>
				<Astro_mini_service/>
			</React.Fragment>
		);
 }

}
export default HomePage;
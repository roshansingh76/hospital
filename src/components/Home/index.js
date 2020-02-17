import React,{Component}from 'react';
import { Link } from 'react-router-dom';
import Slider from './slider';

class HomePage extends Component{
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		console.log('dddddd');
	}
 render(){

		return(
			<Slider/>

		);

 }

}
export default HomePage;
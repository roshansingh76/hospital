import React from 'react';
import { Link } from 'react-router-dom';
import  Horoscopetop from './horoscopetop';
import  Singledetail from './singledetail';
const Horoscopehoroscope_detail=(props)=>{
	
	return (
				<div className="col-md-9 order-md-2">
					<Horoscopetop {...props}/>
					<Singledetail {...props}/>
				</div>

		)
};
export default Horoscopehoroscope_detail;
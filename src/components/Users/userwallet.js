import React,{Component}from 'react';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import * as ROUTES from '../../config/routes';

const Userwallet =(props)=>{
		const data=props.data;
		return(
				<div class="tab-pane fade" id="nav-wallet" role="tabpanel" aria-labelledby="nav-wallet-tab">
					<div className="user-wallet">
						<h4>current balance <span>100 <i class="fa fa-inr"></i></span></h4>
						 <button type="submit" class="btn btn-warning">Recharge</button>
					</div>	
										
									</div>
			
		);
 }
export default Userwallet;
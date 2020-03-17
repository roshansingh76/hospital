import React,{Component}from 'react';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import * as ROUTES from '../../config/routes';

const Profilenav =(props)=>{
		const data=props.data;
		return(


				<nav>
                   <div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                      <a class="nav-item nav-link active" id="nav-recharge-tab" data-toggle="tab" href="#nav-recharge" role="tab" aria-controls="nav-recharge" aria-selected="true">Recharge History</a>
                      <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Edit Profile</a>
                      <a class="nav-item nav-link" id="nav-about-tab" data-toggle="tab" href="#nav-call" role="tab" aria-controls="nav-call" aria-selected="false">Call History</a>
                       <a class="nav-item nav-link" id="nav-wallet-tab" data-toggle="tab" href="#nav-wallet" role="tab" aria-controls="nav-wallet" aria-selected="false">Wallet</a>
                        <a class="nav-item nav-link" id="nav-customer-tab" data-toggle="tab" href="#nav-customer" role="tab" aria-controls="nav-customer" aria-selected="false">Customer Care</a>
                    </div>


{/*<ul className="nav nav-tabs">
				<li className="active"><a data-toggle="tab" href="#home">Recharge History</a></li>
				<li><a data-toggle="tab" href="#menu1">Edit Profile </a></li>
				<li><a data-toggle="tab" href="#menu2">Call History</a></li>
				<li><a data-toggle="tab" href="#menu3">Change Password</a></li>
				<li><a data-toggle="tab" href="#menu4">Wallet</a></li>
				<li className="active"><a data-toggle="tab" href="#menu5">Customer Care</a></li>
			</ul>*/}

                  </nav>
				
			
		);
 }
export default Profilenav;
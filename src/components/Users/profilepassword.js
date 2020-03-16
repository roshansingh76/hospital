import React,{Component}from 'react';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import * as ROUTES from '../../config/routes';

const Profilepassword =(props)=>{
		const data=props.data;
		return(
				
			<div class="tab-pane fade" id="nav-password" role="tabpanel" aria-labelledby="nav-password-tab">
										<div className="row">
											<div className="col-md-6 offset-3">
												<p>Change Password</p>
												<form>
												  <div class="form-group row">
												    <label for="name" className="col-md-3">Old Password:</label>
												    <input type="Password" class="form-control col-md-9"  placeholder="Old Password" />
												  </div>

												  <div class="form-group row">
												    <label for="exampleInputEmail1" className="col-md-3">New Password:</label>
												    <input type="text" class="form-control col-md-9"  placeholder="New Password" />
												  </div>

												  <div class="form-group row">
												    <label for="exampleInputEmail1" className="col-md-3">Confirm Password:</label>
												    <input type="Password" class="form-control col-md-9"  placeholder="Confirm Password" />
												  </div>


												  <button type="submit" class="btn btn-primary">Update</button>
												</form>
											</div>
										</div>
									</div>
		);
 }
export default Profilepassword;
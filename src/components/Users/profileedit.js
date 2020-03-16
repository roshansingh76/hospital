import React,{Component}from 'react';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import * as ROUTES from '../../config/routes';

const Profileedit =(props)=>{
		const data=props.data;
		return(
				
					<div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
						
						<div className="row">
							<div className="col-md-6 offset-3">
								<p>Personal Information</p>
								<form>
								  <div class="form-group row">
								    <label for="name" className="col-md-3">Full Name</label>
								    <input type="email" class="form-control col-md-9"  placeholder="Full Name" />
								  </div>

								  <div class="form-group row">
								    <label for="exampleInputEmail1" className="col-md-3">Email address</label>
								    <input type="email" class="form-control col-md-9"  placeholder="Enter email" />
								  </div>
								  <div class="form-group row">
								    <label for="exampleInputEmail1" className="col-md-3">Gender</label>
									<div class="custom-control custom-radio col-md-2">
										<input type="radio" class="custom-control-input" id="defaultUnchecked" name="defaultExampleRadios"/>
										<label class="custom-control-label" for="defaultUnchecked">Male</label>
									</div>
									<div class="custom-control custom-radio col-md-2">
										<input type="radio" class="custom-control-input" id="defaultChecked" name="defaultExampleRadios"/>
										<label class="custom-control-label" for="defaultChecked">Female</label>
									</div>

			
								  </div>

								  <div class="form-group row">
								    <label for="exampleInputEmail1" className="col-md-3">Mobile Number</label>
								    <input type="email" class="form-control col-md-2"  placeholder="+91" />
								    <input type="email" class="form-control col-md-7"  placeholder="Mobile Number" />
								  </div>


								  <button type="submit" class="btn btn-primary">Update</button>
								</form>
							</div>
						</div>

					</div>
		);
 }
export default Profileedit;
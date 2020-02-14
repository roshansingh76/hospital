import React,{Component}from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../config/routes';
import avatar01 from '../../assets/img/profiles/avatar-01.jpg';
import config from '../../config/config';
class CreateAstro extends Component{
	constructor(props) {
		super(props);
		 this.state = {
			file: avatar01,
			name:'',
			submitted: false,
            loading: false,
            error: ''
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.getAllInfo = this.getAllInfo.bind(this);
	}
	 handleChange(event) {
		this.setState({
		  file: URL.createObjectURL(event.target.files[0])
		})
	}
	componentDidMount() {
		this.getAllInfo();
	}
	getAllInfo(e){
		config.get('/api/getAllinfo',{
				withCredentials:true
		})
		.then((res) => {
			this.setState({ loading: false });
			 if(res.data.success){
					this.setState({ 
						loading: false,
						error:''
					});
				
					
			 }else{
				this.setState({ 
						loading: false,
						error:res.data.message
				}); 
			 }
			}).catch((error) => {
			  if (error.response) {
						this.setState({ 
							loading: false,
							error:error.response.data.message
						});
			  } else if (error.request) {
				  this.setState({ 
							loading: false,
							error:error.message
					});
			  }else{
				  
			  }
		});
		
	}
	handleSubmit(e) {
        e.preventDefault();
		this.setState({ submitted: false });
		const data = new FormData(e.target);
		config.post('/api/createAstro',{
			data:data,
			withCredentials:true
			
		})
		.then((res) => {
			this.setState({ loading: false });
			 if(res.data.success){
					this.setState({ 
						loading: false,
						error:''
					});
				
					
			 }else{
				this.setState({ 
						loading: false,
						error:res.data.message
				}); 
			 }
			}).catch((error) => {
			  if (error.response) {
						this.setState({ 
							loading: false,
							error:error.response.data.message
						});
			  } else if (error.request) {
				  this.setState({ 
							loading: false,
							error:error.message
					});
			  }else{
				  
			  }
		});

	}
	render(){
			 const {submitted, loading, error } = this.state;
			return(
				<form action="#" onSubmit={this.handleSubmit} name="frmcreateAstro">
				<div className="page-wrapper">
					<div className="content container-fluid">
							<div className="page-header">
								<div className="row">
									<div className="col-sm-4 col-auto">
										<h3 className="page-title">Welcome Astrologer</h3>
										<ul className="breadcrumb">
											<li className="breadcrumb-item active">Home</li>
										</ul>
									</div>

									<div className="col-sm-8 col">
										<Link to={ROUTES.Astrologer} className="btn btn-primary float-right mt-2">Back</Link>
										<div className="btn btn-danger float-right mt-2">Delet</div>
										<div className="btn btn-warning float-right mt-2">Edit</div>
									</div>


								</div>
							</div>
						
							
						<div className="row">
							<div className="col-md-12">
							<div className="profile-header">
								<div className="row align-items-center">
								  <div className="col-md-3">
									<div className="col-auto profile-image">
										<img className="rounded-circle" alt="User Image" src={this.state.file}/>
		
									</div>
									</div>
									
									<div className="col-md-3">
										<div className="custom-file">
											<input  onChange={this.handleChange} type="file" className="custom-file-input" id="validatedCustomFile" required=""/>
											<label className="custom-file-label">Choose </label>
										</div>
									</div>
									
								</div>
							</div>
							<div className="profile-menu">
								<ul className="nav nav-tabs nav-tabs-solid">
									<li className="nav-item">
										<a className="nav-link active" data-toggle="tab" href="#profile">Profile</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" data-toggle="tab" href="#address-info">Address Information</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" data-toggle="tab" href="#service-details">Service Details</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" data-toggle="tab" href="#per_details_tab">About</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" data-toggle="tab" href="#password_tab">Password</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" data-toggle="tab" href="#Banking_Information">Banking Information</a>
									</li>
								</ul>
							</div>	
							 <div className="tab-content profile-tab-cont">
								
								<div className="tab-pane fade show active" id="profile">
									<div className="row">
										<div className="col-lg-12">
											<div className="card">
												<div className="card-body">
													<div className="row">
														<div className="col-lg-6">
															<div className="form-group">
																<div className="row">
																	<label className="col-lg-4 col-form-label">First Name</label>
																	<div className="col-lg-8">
																		<input type="text" name="fname" className="form-control" placeholder="First Name"/>
																	</div>
																</div>
															</div>
														</div>
														<div className="col-lg-6">
															<div className="form-group">
																<div className="row">
																	<label className="col-lg-4 col-form-label">Last Name</label>
																	<div className="col-lg-8">
																		<input type="text" name="lname" className="form-control" placeholder="Last Name"/>
																	</div>
																</div>
															</div>
														</div>
													</div>
													
													<div className="row">
														<div className="col-lg-6">
															<div className="form-group">
																<div className="row">
																	<label className="col-lg-4 col-form-label">Phone Number</label>
																	<div className="col-lg-8">
																		<input type="text" name="phone" className="form-control" placeholder="Phone Number"/>
																	</div>
																</div>
															</div>
														</div>
														<div className="col-lg-6">
															<div className="form-group">
																<div className="row">
																	<label className="col-lg-4 col-form-label">Mobile Number</label>
																	<div className="col-lg-8">
																		<input type="text" name="mobile" className="form-control" placeholder="Mobile Number"/>
																	</div>
																</div>
															</div>
														</div>
														<div className="col-lg-6">
															<div className="form-group">
																<div className="row">
																	<label className="col-lg-4 col-form-label">Email ID</label>
																	<div className="col-lg-8">
																		<input type="text" name="email"className="form-control" placeholder="Email ID"/>
																	</div>
																</div>
															</div>
														</div>
														<div className="col-lg-6">
															<div className="form-group">
																<div className="row">
																	<label className="col-lg-4 col-form-label">Gender</label>
																	<div className="col-lg-8">
																		<select name="gender" className="form-control">
																			<option value="male">Gender</option>
																			<option value="male">Male</option>
																			<option value="female">Female</option>
																		</select>
																	</div>
																</div>
															</div>
														</div>
														<div className="col-lg-6">
															<div className="form-group">
																<div className="row">
																	<label className="col-lg-4 col-form-label">Website</label>
																	<div className="col-lg-8">
																		<input type="text" name="website" className="form-control" placeholder="Website"/>
																	</div>
																</div>
															</div>
														</div>
														
														<div className="col-lg-6">
															<div className="form-group">
																<div className="row">
																	<label className="col-lg-4 col-form-label">Status</label>
																	<div className="col-lg-8">
																		<select name="status" className="form-control float-right mt-2">
																		<option value="male">Active</option>
																		<option value="female">In Active</option>
																		</select>
																	</div>
																</div>
															</div>
														</div>
														
														
														
													</div>
												</div>
											</div>
										</div>		
									</div>
								</div>


								<div className="tab-pane fade show" id="address-info">
									<div className="row">
										<div className="col-lg-12">
											<div className="card">
												<div className="card-body">
													<div className="row">
														<div className="col-lg-6">
															<div className="form-group">
																<div className="row">
																	<label className="col-lg-4 col-form-label">Address/Locality</label>
																	<div className="col-lg-8">
																		<input type="text" className="form-control" placeholder="Address/Locality"/>
																	</div>
																</div>
															</div>
														</div>
														<div className="col-lg-6">
															<div className="form-group">
																<div className="row">
																	<label className="col-lg-4 col-form-label">Country</label>
																	<div className="col-lg-8">
																		<select name="country" className="form-control float-right mt-2">
																
																		</select>
																	</div>
																</div>
															</div>
														</div>
														<div className="col-lg-6">
															<div className="form-group">
																<div className="row">
																	<label className="col-lg-4 col-form-label">State</label>
																	<div className="col-lg-8">
																		<select name="state" className="form-control float-right mt-2">
																
																		</select>
																	</div>
																</div>
															</div>
														</div>
														<div className="col-lg-6">
															<div className="form-group">
																<div className="row">
																	<label className="col-lg-4 col-form-label">City</label>
																	<div className="col-lg-8">
																		<select name="city" className="form-control float-right mt-2">
																
																		</select>
																	</div>
																</div>
															</div>
														</div>
														<div className="col-lg-6">
															<div className="form-group">
																<div className="row">
																	<label className="col-lg-4 col-form-label">Pin code</label>
																	<div className="col-lg-8">
																		<input type="text" className="form-control" name="pincode" placeholder="Pin code"/>
																	</div>
																</div>
															</div>
														</div>
													</div>												
												</div>
											</div>
										</div>
									</div>
								</div>
								
								<div className="tab-pane fade show" id="service-details">
									<div className="row">
										<div className="col-lg-12">
											<div className="card">
												<div className="card-body">
													<div className="row">
													<div className="col-lg-12">
														<h6>Select Services with Expertise</h6>
														<div className="checkbox">
															<label className="col-lg-2"><input type="checkbox" name="expertise[]" value=""/> Astrologer </label>
															<label className="col-lg-2"><input type="checkbox" name="expertise[]" value=""/> Numerologer</label>
															<label className="col-lg-2"><input type="checkbox" name="expertise[]" value=""/> Vastu Consultant</label>
															<label className="col-lg-2"><input type="checkbox" name="expertise[]" value=""/> Tarot card reader</label>
															<label className="col-lg-2"><input type="checkbox" name="expertise[]" value=""/> Gems Stone</label>
															<label className="col-lg-2"><input type="checkbox" name="expertise[]" value=""/> Feng Shui</label>
															<label className="col-lg-2"><input type="checkbox" name="expertise[]" value=""/> Palmistry</label>
															<label className="col-lg-2"><input type="checkbox" name="expertise[]" value=""/> Pandit</label>
															<label className="col-lg-2"><input type="checkbox" name="expertise[]" value=""/> Blogger</label>
														</div>
													</div>
														<div className="col-lg-6">
															<div className="form-group">
																<div className="row">
																	<label className="col-lg-4 col-form-label">Education</label>
																	<div className="col-lg-8">
																		<select name="education" className="form-control float-right mt-2">
																
																		</select>
																	</div>
																</div>
															</div>
														</div>
														<div className="col-lg-6">
															<div className="form-group">
																<div className="row">
																	<label className="col-lg-4 col-form-label">Languages</label>
																	<div className="col-lg-8">
																		<select name="language" className="form-control float-right mt-2">
																
																		</select>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								
								<div className="tab-pane fade show" id="per_details_tab">
									<div className="row">
										<div className="col-lg-12">
											<div className="card">
												<div className="card-body">
													<div className="row">
														<div className="col-lg-12">
															<div className="form-group">
																<div className="row">
																	<label className="col-lg-3 col-form-label">Personal Statement</label>
																	<div className="col-lg-9">
																	<textarea className="form-control" name="about" rows="3"></textarea>
																	</div>
																</div>
															</div>
														</div>
													</div>										
												</div>
											</div>
										</div>
									</div>
								</div>
								
								
								<div id="password_tab" className="tab-pane fade">
									<div className="card">
										<div className="card-body">
											<h5 className="card-title">Change Password</h5>
												<div className="row">
													<div className="col-lg-12">
														<div className="form-group">
															<div className="row">
																<label className="col-lg-2 col-form-label">Password</label>
																<div className="col-lg-4">
																	<input type="text" className="form-control" name ="password" placeholder="Password"/>
																</div>
															</div>
														</div>
													</div>
												</div>	
										</div>
									</div>
								</div>
								
								
								<div id="Banking_Information" className="tab-pane fade">
									<div className="card">
										<div className="card-body">
											<div className="row">
												<div className="col-lg-6">
													<div className="form-group">
														<div className="row">
															<label className="col-lg-4 col-form-label">Bank Name</label>
															<div className="col-lg-8">
																<input type="text" className="form-control" placeholder="Bank Name" name="bankname"/>
															</div>
														</div>
													</div>
												</div>
												<div className="col-lg-6">
													<div className="form-group">
														<div className="row">
															<label className="col-lg-4 col-form-label">Account Number</label>
															<div className="col-lg-8">
																<input type="text" className="form-control" placeholder="Account Number" name="anumber"/>
															</div>
														</div>
													</div>
												</div>
												<div className="col-lg-6">
													<div className="form-group">
														<div className="row">
															<label className="col-lg-4 col-form-label">Bank IFSC</label>
															<div className="col-lg-8">
																<input type="text" className="form-control" placeholder="IFSC code" name="ifsc"/>
															</div>
														</div>
													</div>
												</div>
											</div>	
										</div>
									</div>
								</div>
								
							</div>
						</div>
					</div>
					<button className="btn btn-primary" disabled={loading}>Add Astrologer</button>
                        {loading &&
                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        }
						{error &&
							<div className={'alert alert-danger'}>{error}</div>
						}
								
					</div>
			   </div>
			</form>
	);

 }

}
export default CreateAstro
import React,{Component}from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../config/routes';
import avatar01 from '../../assets/img/profiles/avatar-01.jpg';
class CreateAstro extends Component{
	constructor(props) {
		super(props);
		 this.state = {
			file: avatar01,
			name:'',
		}
		this.handleChange = this.handleChange.bind(this)

	}
	 handleChange(event) {
		this.setState({
		  file: URL.createObjectURL(event.target.files[0])
		})
	}
	componentDidMount() {
		console.log('dddddd');
	}
	render(){

			return(
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
											<label className="custom-file-label" for="validatedCustomFile">Choose </label>
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
																		<input type="text" className="form-control" placeholder="First Name"/>
																	</div>
																</div>
															</div>
														</div>
														<div className="col-lg-6">
															<div className="form-group">
																<div className="row">
																	<label className="col-lg-4 col-form-label">Last Name</label>
																	<div className="col-lg-8">
																		<input type="text" className="form-control" placeholder="Last Name"/>
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
																		<input type="text" className="form-control" placeholder="Phone Number"/>
																	</div>
																</div>
															</div>
														</div>
														<div className="col-lg-6">
															<div className="form-group">
																<div className="row">
																	<label className="col-lg-4 col-form-label">Mobile Number</label>
																	<div className="col-lg-8">
																		<input type="text" className="form-control" placeholder="Mobile Number"/>
																	</div>
																</div>
															</div>
														</div>
														<div className="col-lg-6">
															<div className="form-group">
																<div className="row">
																	<label className="col-lg-4 col-form-label">Email ID</label>
																	<div className="col-lg-8">
																		<input type="text" className="form-control" placeholder="Email ID"/>
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
																		<input type="text" className="form-control" placeholder="Website"/>
																	</div>
																</div>
															</div>
														</div>
														
														<div className="col-lg-6">
															<div className="form-group">
																<div className="row">
																	<label className="col-lg-4 col-form-label">Status</label>
																	<div className="col-lg-8">
																		<select name="gender" className="form-control float-right mt-2">
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
																	<label className="col-lg-4 col-form-label">City</label>
																	<div className="col-lg-8">
																		<input type="text" className="form-control" placeholder="City"/>
																	</div>
																</div>
															</div>
														</div>
														<div className="col-lg-6">
															<div className="form-group">
																<div className="row">
																	<label className="col-lg-4 col-form-label">State</label>
																	<div className="col-lg-8">
																		<input type="text" className="form-control" placeholder="State"/>
																	</div>
																</div>
															</div>
														</div>
														<div className="col-lg-6">
															<div className="form-group">
																<div className="row">
																	<label className="col-lg-4 col-form-label">Country</label>
																	<div className="col-lg-8">
																		<input type="text" className="form-control" placeholder="Country"/>
																	</div>
																</div>
															</div>
														</div>
														<div className="col-lg-6">
															<div className="form-group">
																<div className="row">
																	<label className="col-lg-4 col-form-label">Pin code</label>
																	<div className="col-lg-8">
																		<input type="text" className="form-control" placeholder="Pin code"/>
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
															<label className="col-lg-2"><input type="checkbox" value=""/> Astrologer </label>
															<label className="col-lg-2"><input type="checkbox" value=""/> Numerologer</label>
															<label className="col-lg-2"><input type="checkbox" value=""/> Vastu Consultant</label>
															<label className="col-lg-2"><input type="checkbox" value=""/> Tarot card reader</label>
															<label className="col-lg-2"><input type="checkbox" value=""/> Gems Stone</label>
															<label className="col-lg-2"><input type="checkbox" value=""/> Feng Shui</label>
															<label className="col-lg-2"><input type="checkbox" value=""/> Palmistry</label>
															<label className="col-lg-2"><input type="checkbox" value=""/> Pandit</label>
															<label className="col-lg-2"><input type="checkbox" value=""/> Blogger</label>
														</div>
													</div>
														<div className="col-lg-6">
															<div className="form-group">
																<div className="row">
																	<label className="col-lg-4 col-form-label">Education</label>
																	<div className="col-lg-8">
																		<input type="text" className="form-control" placeholder="Education"/>
																	</div>
																</div>
															</div>
														</div>
														<div className="col-lg-6">
															<div className="form-group">
																<div className="row">
																	<label className="col-lg-4 col-form-label">Languages</label>
																	<div className="col-lg-8">
																		<input type="text" className="form-control" placeholder="Languages"/>
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
																	<textarea className="form-control" name="Personal" rows="3"></textarea>
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
																	<input type="text" className="form-control" placeholder="Password"/>
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
																<input type="text" className="form-control" placeholder="Bank Name"/>
															</div>
														</div>
													</div>
												</div>
												<div className="col-lg-6">
													<div className="form-group">
														<div className="row">
															<label className="col-lg-4 col-form-label">Account Number</label>
															<div className="col-lg-8">
																<input type="text" className="form-control" placeholder="Account Number"/>
															</div>
														</div>
													</div>
												</div>
												<div className="col-lg-6">
													<div className="form-group">
														<div className="row">
															<label className="col-lg-4 col-form-label">Bank IFSC</label>
															<div className="col-lg-8">
																<input type="text" className="form-control" placeholder="IFSC code"/>
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
					
					
						
					</div>
			   </div>

	);

 }

}
export default CreateAstro
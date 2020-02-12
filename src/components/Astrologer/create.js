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
									<div className="col-sm-7 col-auto">
										<h3 className="page-title">Welcome Astrologer</h3>
										<ul className="breadcrumb">
											<li className="breadcrumb-item active">Home</li>
										</ul>
									</div>

									<div className="col-sm-5 col">
										<Link to={ROUTES.Astrologer} className="btn btn-primary float-right mt-2">Back</Link>
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
																<div class="form-group">
																	<div className="row">
																		<label class="col-lg-3 col-form-label">Name</label>
																		<div class="col-lg-9">
																		<input type="text" class="form-control"/>
																		</div>
																	</div>
																</div>
																
															</div>
															<div className="col-lg-6">
																<div class="form-group">
																	<div className="row">
																		<label class="col-lg-3 col-form-label">Name</label>
																		<div class="col-lg-9">
																		<input type="text" class="form-control"/>
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
												<div className="col-md-10 col-lg-6">
													
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
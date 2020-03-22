import React,{Component}from 'react';
import { Link } from 'react-router-dom';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import * as ROUTES from '../../config/routes';
import avatar01 from '../../assets/img/profiles/avatar-01.jpg';
const url ="https://www.jyotirvid.in";
class CreateAstro extends Component{
	constructor(props) {
		super(props);
		 this.state = {
			file:avatar01,
			name:'',
			submitted: false,
            loading: false,
			error: '',
			gender:[],
			language:[],
			countries:[],
			expertise:[],
			state:[],
			city:[],
			status:[],
			success:'',
			fname:'',
			lname:'',
			email:'',
			phone:'',
			mobile:'',
			website:'',
			statusx:'',
			chatprice:'',
			callprice:'',
			reportprice:'',
			address:'',
			exp:'',
			countryx:'',
			statex:'',
			cityx:'',
			pincode:'',
			expertisex:[],
			languagex:[],
			about:'',
			password:'',
			bankname:'',
			anumber:'',
			ifsc:'',
			image:'',
			statusx:'',
			genderx:''
			
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.getAllInfo = this.getAllInfo.bind(this);
		this.selectCountry  = this.selectCountry .bind(this);
		this.selectRegion  = this.selectRegion .bind(this);
		this.selectCity  = this.selectCity .bind(this);
		this.handleChangestatus  = this.handleChangestatus .bind(this);
		this.handleChangeGender  = this.handleChangeGender .bind(this);
		this.handleChange  = this.handleChange .bind(this);
		this.onChangeexperties  = this.onChangeexperties .bind(this);
		this.onChangeelanguage  = this.onChangeelanguage .bind(this);
	
	}
	 handleChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	}
	componentDidMount() {
		this.getAllInfo();
	}

	getAllInfo(e){
		axios.get(url+'/api/astro/getAllinfo',{
				withCredentials:false
		})
		.then((res) => {
			this.setState({ loading: false });
			 if(res.data.success){
					this.setState({ 
						loading: false,
						error:'',
						countries:res.data.countries,
						gender:res.data.gender,
						expertise:res.data.expertise,
						status:res.data.status,
						language:res.data.language
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
			  }
		});
		
	}
	handleSubmit(e) {
        e.preventDefault();
		this.setState({
			submitted: false,
			loading: true,
			success:'',
			error:'',
			
		});

		axios.post(url+'/api/astro/createAstro',{
			fname:this.state.fname,
			lname:this.state.lname,
			email:this.state.email,
			phone:this.state.phone,
			mobile:this.state.mobile,
			website:this.state.website,
			chatprice:this.state.chatprice,
			callprice:this.state.callprice,
			reportprice:this.state.reportprice,
			address:this.state.address,
			exp:this.state.exp,
			countryx:this.state.countryx,
			statex:this.state.statex,
			cityx:this.state.cityx,
			pincode:this.state.pincode,
			expertisex:this.state.expertisex,
			languagex:this.state.languagex,
			about:this.state.about,
			password:this.state.password,
			bankname:this.state.bankname,
			anumber:this.state.anumber,
			ifsc:this.state.ifsc,
			image:this.state.file,
			statusx:this.state.statusx,
			genderx:this.state.genderx,
		})
		.then((res) => {
			this.setState({ loading: true });
			 if(res.data.success){
					this.setState({ 
						loading: false,
						success:res.data.message
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
							error:error.response
						});
			  } else if (error.request) {
				  this.setState({ 
							loading: false,
							error:error.response
					});
			  }else{
				  
			  }
		});

	}
	onChangeexperties(e) {
    // current array of options
    const options = this.state.expertisex
    let index

    // check if the check box is checked or unchecked
    if (e.target.checked) {
      // add the numerical value of the checkbox to options array
      options.push(+e.target.value)
    } else {
      // or remove the value from the unchecked checkbox from the array
      index = options.indexOf(+e.target.value)
      options.splice(index, 1)
    }

    // sort the array
    options.sort()    

    // update the state with the new array of options
    this.setState({ expertisex: options })
  }
	onChangeelanguage(e) {
    // current array of options
    const options = this.state.languagex
    let index

    // check if the check box is checked or unchecked
    if (e.target.checked) {
      // add the numerical value of the checkbox to options array
      options.push(+e.target.value)
    } else {
      // or remove the value from the unchecked checkbox from the array
      index = options.indexOf(+e.target.value)
      options.splice(index, 1)
    }

    // sort the array
    options.sort()    

    // update the state with the new array of options
    this.setState({ languagex: options })
  }

	selectCountry (val) {
		 var data ={
			 countery_id:val
		 }
		 this.setState({
				countryx:val
		 });
		axios.get(url+'/api/astro/getState?id='+val)
		.then((res) => {
			this.setState({ loading: false });
			 if(res.data.success){
					this.setState({ 
						loading: false,
						state:res.data.state
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
	handleChangestatus(val){
			
		 this.setState({
			statusx:val
		 });
	}
	handleChangeGender(val){
		 this.setState({
			genderx:val
		 });
	}
	selectCity(val){
		 this.setState({
				cityx:val
		 });
	}
	selectRegion (val) {
		var data ={
			state_id:val
		}
		 this.setState({
				statex:val
		 });
	   axios.get(url+'/api/astro/getCity?id='+val)
	   .then((res) => {
		   this.setState({ loading: false });
			if(res.data.success){
				   this.setState({ 
					   loading: false,
					   city:res.data.city
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
			const {submitted,gender,language,countries,expertise,
			 loading, error,success,
				state,city,fname,
				lname,
				email,
				phone,
				mobile,
				website,
				status,
				chatprice,
				callprice,
				reportprice,
				address,
				exp,
				countryx,
				statex,
				cityx,
				pincode,
				expertisex,
				languagex,
				about,
				password,
				bankname,
				anumber,
				ifsc,
				image,
				statusx,
				genderx
	
			} = this.state;	
			 let stateList = state.length > 0
				&& state.map((item, i) => {
				return (
					<option key={i} value={item.id} >{item.name}</option>
				)
			});
			let cityList = city.length > 0
			&& city.map((item, i) => {
				return (
					<option key={i} value={item.id} >{item.city}</option>
				)
			});

			let countriesList = countries.length > 0
			&& countries.map((item, i) => {
			return (
				<option key={i} value={item.id} >{item.name}</option>
			)
			});


			let genderlist =gender.length>0
			&& gender.map((item,i)=>{
				return <option key={i} value={item.id}>{item.gender_name}</option>
			})
			let statuslist=status.length>0
			&& status.map((item,i)=>{
			return <option key={i} value={item.id}>{item.status_name}</option>					

			})

			let expertiselist=expertise.length>0
			&& expertise.map((item,i)=>{
						
			return <label className="col-lg-2" key={i} >
				<input type="checkbox" name="expertisex[]"    onChange={this.onChangeexperties} key={i} value={item.id}/> 
				{item.expertise_name} </label>
														
			})
			let languagelist=language.length>0
			&& language.map((item,i)=>{
						
				return <label className="col-lg-2" key={i} ><input type="checkbox" onChange={this.onChangeelanguage} name="languagex[]" key={i} value={item.id}/> {item.language_name} </label>
														
												
			})
			return(
			<ValidatorForm   ref="form"
			onSubmit={this.handleSubmit}
			onError={errors => console.log(errors)} name="frmcreateAstro">
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
											<input  onChange={this.handleChange} type="file" name="image" className="custom-file-input" id="validatedCustomFile" required=""/>
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
										<a className="nav-link" data-toggle="tab" href="#rate">Rate Or Price</a>
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
																		<input type="text" name="fname"
																			 placeholder="Enter First Name"
																			 className="form-control" 
																			 onChange={this.handleChange}
																			 value={this.state.fname}
																				
																			/>
																	</div>
																</div>
															</div>
														</div>
														<div className="col-lg-6">
															<div className="form-group">
																<div className="row">
																	<label className="col-lg-4 col-form-label">Last Name</label>
																	<div className="col-lg-8">
																		<input type="text" onChange={this.handleChange}
																		name="lname" 
																		value={this.state.lname}
																		placeholder="Enter Last Name" className="form-control" />
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
																		<input type="text" name="phone" 
																			 className="form-control" 
																				onChange={this.handleChange}
																			  placeholder="Phone Number"/>
																	</div>
																</div>
															</div>
														</div>
														<div className="col-lg-6">
															<div className="form-group">
																<div className="row">
																	<label className="col-lg-4 col-form-label">Mobile Number</label>
																	<div className="col-lg-8">
																		<input type="text" name="mobile" 
																		className="form-control" onChange={this.handleChange}  placeholder="Mobile Number"/>
																	</div>
																</div>
															</div>
														</div>
														<div className="col-lg-6">
															<div className="form-group">
																<div className="row">
																	<label className="col-lg-4 col-form-label">Email ID</label>
																	<div className="col-lg-8">
																	<input  type="text" name="email" placeholder="Enter Email"	
																	onChange={this.handleChange}  className="form-control"/>
                    
                   												</div>
																</div>
															</div>
														</div>
														<div className="col-lg-6">
															<div className="form-group">
																<div className="row">
																	<label className="col-lg-4 col-form-label">Gender</label>
																	<div className="col-lg-8">
																		<select name="gender"  onChange={e=>this.handleChangeGender(e.target.value)} className="form-control" >
																			{genderlist}
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
																		<input type="text" name="website" onChange={this.handleChange} className="form-control" placeholder="Website"/>
																	</div>
																</div>
															</div>
														</div>
														
														<div className="col-lg-6">
															<div className="form-group">
																<div className="row">
																	<label className="col-lg-4 col-form-label">Status</label>
																	<div className="col-lg-8">
																		<select name="status" onChange={e=>this.handleChangestatus(e.target.value)}  className="form-control float-right mt-2">
																		{statuslist}
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
								<div className="tab-pane fade show" id="rate">
								<div className="card">
										<div className="card-body">
											<div className="row">
												<div className="col-lg-6">
													<div className="form-group">
														<div className="row">
															<label className="col-lg-4 col-form-label">Chat Price</label>
															<div className="col-lg-8">
																<input type="number" onChange={this.handleChange} className="form-control" placeholder="Chat Price" name="chatprice"/>
															</div>
														</div>
													</div>
												</div>
												<div className="col-lg-6">
													<div className="form-group">
														<div className="row">
															<label className="col-lg-4 col-form-label">Call Price</label>
															<div className="col-lg-8">
																<input type="number" onChange={this.handleChange} className="form-control" placeholder="Call Price" name="callprice"/>
															</div>
														</div>
													</div>
												</div>
												<div className="col-lg-6">
													<div className="form-group">
														<div className="row">
															<label className="col-lg-4 col-form-label">Report Price</label>
															<div className="col-lg-8">
																<input type="number" onChange={this.handleChange} className="form-control" placeholder="Report Price" name="reportprice"/>
															</div>
														</div>
													</div>
													<div className="form-group">
														<div className="row">
															<label className="col-lg-4 col-form-label">Experience</label>
															<div className="col-lg-8">
																<input type="number" onChange={this.handleChange} className="form-control" placeholder="Enter experince" name="exp"/>
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
																		<input type="text" name="address" onChange={this.handleChange} className="form-control" placeholder="Address/Locality"/>
																	</div>
																</div>
															</div>
														</div>
														<div className="col-lg-6">
															<div className="form-group">
																<div className="row">
																	<label className="col-lg-4 col-form-label">Country</label>
																	<div className="col-lg-8">
																		<select name="countryx"  onChange={e => this.selectCountry(e.target.value)} className="form-control float-right mt-2">
																			{countriesList}
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
																		<select name="statex"  className="form-control float-right mt-2" onChange={e => this.selectRegion(e.target.value)}>
																			{stateList}
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
																		<select name="cityx"  onChange={e => this.selectCity(e.target.value)} className="form-control float-right mt-2">
																				{cityList}
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
																		<input type="text" onChange={this.handleChange} className="form-control" name="pincode" placeholder="Pin code"/>
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
																	{expertiselist}
															</div>
														</div>
														<div className="col-lg-12">
															<h6>Language</h6>
															<div className="checkbox">
																	{languagelist}
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
																	<textarea className="form-control" onChange={this.handleChange} name="about" rows="3"></textarea>
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
								
								
								<div id="password_tab" className="tab-pane  fade show">
									<div className="card">
										<div className="card-body">
											<h5 className="card-title">Change Password</h5>
												<div className="row">
													<div className="col-lg-12">
														<div className="form-group">
															<div className="row">
																<label className="col-lg-2 col-form-label">Password</label>
																<div className="col-lg-4">
																	<input type="text" className="form-control" onChange={this.handleChange}  name ="password" placeholder="Password"/>
																</div>
															</div>
														</div>
													</div>
												</div>	
										</div>
									</div>
								</div>
								
								
								<div id="Banking_Information" className="tab-pane  fade show">
									<div className="card">
										<div className="card-body">
											<div className="row">
												<div className="col-lg-6">
													<div className="form-group">
														<div className="row">
															<label className="col-lg-4 col-form-label">Bank Name</label>
															<div className="col-lg-8">
																<input type="text" onChange={this.handleChange} className="form-control" placeholder="Bank Name" name="bankname"/>
															</div>
														</div>
													</div>
												</div>
												<div className="col-lg-6">
													<div className="form-group">
														<div className="row">
															<label className="col-lg-4 col-form-label">Account Number</label>
															<div className="col-lg-8">
																<input type="text" onChange={this.handleChange} className="form-control" placeholder="Account Number" name="anumber"/>
															</div>
														</div>
													</div>
												</div>
												<div className="col-lg-6">
													<div className="form-group">
														<div className="row">
															<label className="col-lg-4 col-form-label">Bank IFSC</label>
															<div className="col-lg-8">
																<input type="text" onChange={this.handleChange} className="form-control" placeholder="IFSC code" name="ifsc"/>
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
					{error &&
							<div className={'alert alert-danger'}>{error}</div>
						}
					<button className="btn btn-primary" disabled={loading}>Add Astrologer</button>
                        {loading &&
                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        }
						
						{success &&
							<div className={'alert alert-success'}>{success}</div>
						}		
					</div>
			   </div>
			</ValidatorForm>
	);

 }

}
export default CreateAstro
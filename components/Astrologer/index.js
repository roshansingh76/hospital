import React,{Component}from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../config/routes';
class Astrologer extends Component{
	constructor(props) {
		super(props);
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

								<div class="col-sm-5 col">
									<Link to={ROUTES.addAstrologer} className="btn btn-primary float-right mt-2">Add</Link>
								</div>


							</div>
						</div>
											
					<div className="row">
						<div className="col-sm-12">
							<div className="card">
								<div className="card-body">
									<div className="table-responsive">
										<table className="datatable table table-hover table-center mb-0">	
											<thead>
												<tr>
													<th>Astrologer Name</th>
													<th>Speciality</th>
													<th>Member Since</th>
													<th>Earned</th>
													<th>Account Status</th>
													
												</tr>
											</thead>
											 <tbody>
												<tr>
													<td>
														<h2 class="table-avatar">
															<a href="#" class="avatar avatar-sm mr-2">
															<img class="avatar-img rounded-circle" src="#" alt="User Image"/></a>
															<a href="">Dr. Ruby Perrin</a>
														</h2>
													</td>
													<td>Dental</td>
													<td>14 Jan 2019 </td>
													<td>$3100.00</td>
													<td>$3100.00</td>
												</tr>
											 </tbody>	
										</table>
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
export default Astrologer;
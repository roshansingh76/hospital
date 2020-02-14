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

								<div className="col-sm-5 col">
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
													<th>S.no</th>
													<th>User Type</th>
													<th>Image</th>
													<th>Name</th>
													<th>Email</th>
													<th>Status	</th>
													<th>Action</th>
													
												</tr>
											</thead>
											 <tbody>
												<tr>
													<td>1</td>
													<td>Astrologer</td>
													<td>
														<h2 className="table-avatar">
															<a href="#" className="avatar avatar-sm mr-2">
															<img className="avatar-img rounded-circle" src="/static/media/avatar-01.b3a5c318.jpg" alt="User Image"/></a>
															<a href=""></a>
														</h2>
													</td>
													<td>DR. Anshumali</td>
													<td>scientificastrologics@gmail.com</td>
													<td>Active</td>
													<td>
														<button className="btn btn-xs btn-primary">Edit</button>
														<button className="btn btn-xs btn-danger">Trash</button>
													</td>
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
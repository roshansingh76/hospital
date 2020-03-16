import React,{Component}from 'react';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import * as ROUTES from '../../config/routes';

const Callhistory =(props)=>{
		const data=props.data;
		return(
				
			<div class="tab-pane fade" id="nav-call" role="tabpanel" aria-labelledby="nav-call-tab">


				<table class="table table-bordered">
						<thead>
							<tr>
						        <th>Date & Time</th>
						        <th>Session ID</th>
						        <th>Call Log ID</th>
						        <th>Astrologer</th>
						        <th>Per Min Charges</th>
						        <th>Call Duration</th>
						        <th>Amount Charged</th>

						    </tr>
						</thead>
						<tbody>
					      <tr>
					        <td>John</td>
					        <td>Doe</td>
					        <td>john@example.com</td>
					        <td>John</td>
					        <td>Doe</td>
					        <td>john@example.com</td>
					        <td>July</td>
					      </tr>
					      <tr>
					        <td>Mary</td>
					        <td>Moe</td>
					        <td>mary@example.com</td>
					        <td>John</td>
					        <td>Doe</td>
					        <td>john@example.com</td>
					        <td>July</td>
					      </tr>
					      <tr>
					        <td>July</td>
					        <td>Dooley</td>
					        <td>july@example.com</td>
					        <td>John</td>
					        <td>Doe</td>
					        <td>john@example.com</td>
					        <td>July</td>
					      </tr>
					    </tbody>
					</table>



			</div>
		);
 }
export default Callhistory;
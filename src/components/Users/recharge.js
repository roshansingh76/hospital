import React,{Component}from 'react';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import * as ROUTES from '../../config/routes';

const Recharge =(props)=>{
		const data=props.data;
		return(
				<div class="tab-pane fade show active" id="nav-recharge" role="tabpanel" aria-labelledby="nav-recharge-tab">
					<table class="table table-bordered">
						<thead>
							<tr>
						        <th>Order ID</th>
						        <th>Date &amp; Time</th>
						        <th>Call Pack</th>
						        <th>Discount</th>
						        <th>Bonus</th>
						        <th>Amount Paid</th>
						        <th>Amount Credited</th>

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
export default Recharge;
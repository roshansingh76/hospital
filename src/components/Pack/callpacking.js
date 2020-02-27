import React,{Component,Fragment}from 'react';
import { BrowserRouter as Router, Route,Redirect,withRouter,useHistory } from 'react-router-dom';

class Callingpack extends Component {
		constructor(props) {
		super(props);
	
   }
  render() {
		return (
		  		<section className="padding">
		  			<div className="container">
		  				<h1 className="bookig-heding">Add money to your wallet</h1>
		  				<div className="row">
		  					<div className="col-md-8">
		  						<div className="row">

		  							<div className="col-md-6">
		  								<a href="#">
					  						<div className="asto-package-price">
					  							<p>50 <i className="fa fa-inr"></i></p>
					  							<span>Add money</span>
					  						</div>
				  						</a>
				  					</div>
				  					
				  				</div>
		  					</div>


		  					<div className="col-md-4">
		  						<div className="cart-total">
		  							<p>Total Money Add</p>

		  							<div className="mony-info">
										<table class="table cart mt-10">
											<tbody>
											    <tr class="cart_item cart_totle">
											        <td class="cart-product-name">
											            <strong>Price Add</strong>
											        </td>
											        <td class="cart-product-name">
											            <span class="amount">1000 <i className="fa fa-inr"></i></span>
											        </td>
											    </tr>
											    <tr class="cart_item cart_totle">
											        <td class="cart-product-name">
											            <strong>GST@18%</strong>
											        </td>
											        <td class="cart-product-name">
											            <span class="amount">20 <i className="fa fa-inr"></i></span>
											        </td>
											    </tr>
											    <tr class="cart_item cart_totle">
											        <td class="cart-product-name">
											            <strong>Discount</strong>
											        </td>
											        <td class="cart-product-name">
											            <span class="theme"><strong>- 50</strong> <i className="fa fa-inr"></i></span>
											        </td>
											    </tr>
											    <tr class="cart_item cart_totle">
											        <td class="cart-product-name">
											            <strong>Total Payable Amount</strong>
											        </td>
											        <td class="cart-product-name">
											            <span class="theme"><strong><i className="fa fa-inr"></i>1020</strong></span>
											        </td>
											    </tr>
											</tbody>
										</table>
		  							</div>

		  							<div className="referl-info">
		  								<p>Do you have referral code?</p>
		  								<form class="form-inline">
		  									<div class="form-group">
										      <input type="email" class="form-control" placeholder="Enter Referal Code" name="email" />
										      <button type="submit" class="btn btn-default">Apply</button>
										    </div>
		  								</form>
		  							</div>

		  							<div className="addmoney-btn">
										<button type="submit" class="btn btn-default">Proceed to Recharge</button>
		  							</div>

		  						</div>
		  					</div>

		  				</div>
		  			</div>
		  		</section>
		);
  }
}

export default Callingpack;
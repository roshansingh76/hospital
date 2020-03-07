import React,{Component,Fragment}from 'react';
import { BrowserRouter as Router,Link, Route,Redirect,withRouter,useHistory } from 'react-router-dom';
import config from '../../config/config';
const url ="https://www.jyotirvid.in:3000";
class Callingpack extends Component {
		constructor(props) {
		super(props);
		  this.state = {
            packList: [],
            loading: false,
			discount:0,
			gst:0,
			currentPrice:0,
			totalPrice:'',
            error: ''
        };
	
	   this.checkPrice = this.checkPrice.bind(this);
   }
  componentDidMount() {
	const script = document.createElement("script");
	script.src = "https://js.instamojo.com/v1/checkout.js";
	script.async = true;
	script.onload = () => this.onOpen();
    document.body.appendChild(script);
	this.getPackList();  
   }
   
   getPackList(){
	   this.setState({
			loading:false
		});
		
	  fetch(url+"/api/service/getPackages")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            loading: false,
            packList: result.data
          });
		
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            loading: true,
            error
          });
        }
      )
	   
	
   }
  checkPrice(id,price){
		let gst=(price*18)/100;
		let totalPrice=price+gst;
		this.setState({
			 currentPrice:price	,	
			 gst:gst,	
			 totalPrice:totalPrice	
		});
  }
  onOpen() {
	  
		
  }
  onClose(){
	  
  }
  onSuccess(response) {
	  
	  
  }
 onFailure(response) {
	 
 }




  render() {
	    let {packList,discount,currentPrice,gst,totalPrice}=this.state; 
		return (
		  		<section className="padding">
		  			<div className="container">
		  				<h1 className="bookig-heding">Add money to your wallet</h1>
		  				<div className="row">
		  					<div className="col-md-8">
		  						<div className="row">
									{ packList.length===0 &&
									<ul>
									<center><img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" /></center>
									</ul>
									}
									
									{
									packList.length > 1 &&
									packList.map((rowData, index) => (
									
									
		  							<div  key={index+1} className="col-md-6">
		  								<a onClick={e =>this.checkPrice(rowData.id,rowData.price)}>
					  						<div className="asto-package-price">
					  							<p>{rowData.price} <i className="fa fa-inr"></i></p>
					  							<span>Add money</span>
					  						</div>
				  						</a>
				  					</div>
									))}
									
				  					
				  				</div>
		  					</div>


		  					<div className="col-md-4">
		  						<div className="cart-total">
		  							<p>Total Money Add</p>

		  							<div className="mony-info">
										<table className="table cart mt-10">
											<tbody>
											    <tr className="cart_item cart_totle">
											        <td className="cart-product-name">
											            <strong>Price Add</strong>
											        </td>
											        <td className="cart-product-name">
											            <span className="amount">{currentPrice} <i className="fa fa-inr"></i></span>
											        </td>
											    </tr>
											    <tr className="cart_item cart_totle">
											        <td className="cart-product-name">
											            <strong>GST@18%</strong>
											        </td>
											        <td className="cart-product-name">
											            <span className="amount">{gst} <i className="fa fa-inr"></i></span>
											        </td>
											    </tr>
											    <tr className="cart_item cart_totle">
											        <td className="cart-product-name">
											            <strong>Discount</strong>
											        </td>
											        <td className="cart-product-name">
											            <span className="theme"><strong>- {discount}</strong> <i className="fa fa-inr"></i></span>
											        </td>
											    </tr>
											    <tr className="cart_item cart_totle">
											        <td className="cart-product-name">
											            <strong>Total Payable Amount</strong>
											        </td>
											        <td className="cart-product-name">
											            <span className="theme"><strong><i className="fa fa-inr"></i>{totalPrice}</strong></span>
											        </td>
											    </tr>
											</tbody>
										</table>
		  							</div>

		  							<div className="referl-info">
		  								<p>Do you have referral code?</p>
		  								<form className="form-inline">
		  									<div className="form-group">
										      <input type="email" className="form-control" placeholder="Enter Referal Code" name="email" />
										      <button type="submit" className="btn btn-default">Apply</button>
										    </div>
		  								</form>
		  							</div>

		  							<div className="addmoney-btn">
										<button type="submit" className="btn btn-default" onClick={e =>this.onOpen()}>Proceed to Recharge</button>
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
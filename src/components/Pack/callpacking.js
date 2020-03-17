import React,{Component,Fragment}from 'react';
import { BrowserRouter as Router,Link, Route,Redirect,withRouter,useHistory } from 'react-router-dom';
import config from '../../config/config';
const url ="https://www.jyotirvid.in";
const tempurl ="https://localhost:5000";
class Callingpack extends Component {
		constructor(props) {
		super(props);
		  this.state = {
            packList: [],
            loading: false,
			defaultdata:[],
			discount:0,
			gst:0,
			currentPrice:0,
			totalPrice:'',
            error: '',
			packId:'',
        };
	
	   this.checkPrice = this.checkPrice.bind(this);
	   this.checkDefaultpackage = this.checkDefaultpackage.bind(this);
	   this.redirectToPayU = this.redirectToPayU.bind(this);

	   

   }
  componentDidMount() {
	  
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
            packList: result.data,
			defaultdata:result.default
          });
			this.checkDefaultpackage();
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
  checkDefaultpackage(){
	   const pack=this.state.defaultdata;
		if(pack.length===1){
			let price=pack[0].price;
			let gst=(price*18)/100;
			let totalPrice=price+gst;
			this.setState({
			 currentPrice:price	,	
			 gst:gst,	
			 totalPrice:totalPrice,
			 packId:pack[0].id
		});
		}
   }
  checkPrice(id,price){
		let gst=(price*18)/100;
		let totalPrice=price+gst;
		this.setState({
			 currentPrice:price	,	
			 gst:gst,	
			 totalPrice:totalPrice,
			 packId:id
		});
  }
 payumoney() {
	var pd = {
		 key: '7pDTZjon',
		 txnid: '1233',
		 amount:this.state.totalPrice,
		 firstname: 'Roshan',
		 email: 'roshansingh@gmail.com',
		 phone:'7696689508',
		 productinfo:'1',
		 surl:'paymentsuccess',
		 furl:'paymentfaild',
		 hash: 'lJSLB6aMGZ'
	}
	let data = {
		'txnid': pd.txnid,
		'email': pd.email,
		'amount': pd.amount,
		'productinfo': pd.productinfo,
		'firstname': pd.firstname
	}
	let self = this;
	fetch(url + '/api/payment/payUMoneyPayment', {
		method: 'post',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
	.then(function (a) {
		return a.json(); 
	})
	.then(function (json) {
		pd.hash = json.hash;
		self.redirectToPayU(pd);
	});
}
  redirectToPayU(pd) {
	  console.log(localStorage.getItem('token'));
	 window.bolt.launch(pd, {
		responseHandler: function (response) {
			let data=response.response;
			if(data.txnStatus==="SUCCESS"){
				
			  let formdata={
					token:localStorage.getItem('token'),
					country:data.country,
					udf10:data.udf10,
					discount:data.discount,
					mode:data.mode,
					cardhash:data.cardhash,
					error_Message:data.error_Message,
					state:data.state,
					bankcode:data.bankcode,
					txnid:data.txnid,
					net_amount_debit:data.net_amount_debit,
					firstname:data.firstname,
					lastname:data.lastname,
					zipcode:data.zipcode,
					phone:data.phone,
					productinfo:data.productinfo,
					status:data.status,
					city:data.city,
					isConsentPayment:data.isConsentPayment,
					error:data.error,
					addedon:data.addedon,
					udf9:data.udf9,
					udf7:data.udf7,
					udf8:data.udf8,
					encryptedPaymentId:data.encryptedPaymentId,
					bank_ref_num:data.bank_ref_num,
					email:data.email,
					amount:data.amount,
					unmappedstatus:data.unmappedstatus,
					address2:data.address2,
					payuMoneyId:data.payuMoneyId,
					address1: data.address1,
					udf5:data.udf5,
					mihpayid:data.mihpayid,
					udf6: data.udf6,
					udf3:data.udf3,
					udf4:data.udf4,
					udf1: data.udf1,
					udf2: data.udf2,
					field1:data.field1,
					cardnum:data.cardnum,
					field7:data.field7,
					field6: data.field6,
					field9: data.field9,
					field8: data.field8,
					amount_split:data.amount_split,
					field3:data.field3,
					field2: data.field2,
					field5: data.field5,
					PG_TYPE:data.PG_TYPE,
					field4:data.field4,
					name_on_card:data.name_on_card,
					txnStatus:data.txnStatus,
					txnMessage:data.txnMessage

			  };
			fetch(url + '/api/payment/payUMoneyPaymentstatus', {
				method: 'post',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
					'x-access-token':localStorage.getItem('token')
				},
				body: JSON.stringify(formdata)
			})
			.then(function (a) {
				return a.json(); 
			})
			.then(function (json) {
				localStorage.setItem('wallet',json.wallet);
			 });
	
	
			 
			}else if(data.txnStatus=="CANCEL"){
				
			}else{
				
			}
			
			//console.log(response.response.txnStatus);
			//console.log(response);
		},
		catchException: function (response) {
		 console.log(response);
		}
	});
  }
  onSuccess(response) {
	  
	  
  }
  onFailure(response) {
	 
  }




  render() {
	    let {packList,discount,currentPrice,gst,totalPrice,packId}=this.state; 
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
					  						<div className={rowData.id==packId ?'asto-package-price active':'asto-package-price'}>
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
										<button type="submit" className="btn btn-default" onClick={e =>this.payumoney()}>Proceed to Recharge</button>
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
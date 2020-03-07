import React,{Component,Fragment}from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import OtpInput from 'react-otp-input';
Modal.setAppElement('#root');
var validator = require('validator');

const customStyles = {
  content : {
	
	
  }
};
const containerStyle={
	float:'right'
}
const errorStyle={
	 border:'2px solid red'
}
const pStyle='';
const FrontendLogin=(props)=>{
	let model=props.data.modalIsOpen;
	let loader=props.data.loader;
	let error=props.data.error;
	let flagMobilecontainer=props.data.flagMobilecontainer;
	let flagOtpcontainer=props.data.flagOtpcontainer;
	let flagSignin=props.data.flagSignin;
	let mobile=props.data.mobile;
	let otp=props.data.otp;
	let success=props.data.success;
	let hasErrored=props.data.hasErrored;
	let classNamex='';
	
	 if (hasErrored) {
		 console.log(hasErrored);
			classNamex = 'input-border';
	 }
	return (
		<Modal
	   isOpen={model}
	   onAfterOpen={props.afterOpenModal}
	   onRequestClose={props.closeModal}
	     style={customStyles}
		>
	   <a  className="model-close-cust" onClick={props.closeModal}><i className="fa fa-times"></i></a>
		<form>
			{flagMobilecontainer &&
				<div className="form-new-pop">
					<div className="from-left">
						<img src="https://images.astroyogi.com/astroyogi2017/english/images/tta/sign_up_banner.jpg" alt="img"/>
					</div>

					<div className="from-right">
						<p>Sign Up</p>
						<div className="custom-in-cls">
						  	<input type="text" placeholder="+91" className ="form-control form-control-l-t" name="mobile"/>
						 	<input type="number" placeholder="Mobile Number" 
							className ="form-control form-control-r-t"
							name="mobile"
							pattern="\d{3}[\-]\d{3}[\-]\d{4}"
							onChange={props.handleChange} 
						    maxLength={10}
							autoFocus 
							/>
						</div>
					  {loader &&
						<img style={{ height: '25px',width: '25px' }}  src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
						}
						{error &&
							<div className={'alert alert-danger'}>{error}</div>
						}
					  <button type="button" className="mob-btn" onClick={props.sendOtp}>Sign Up</button>
						  <div className="login-new-win">
						  	<p>Already have an account ? <a onClick={props.signin}>Sign In</a></p>
						  </div>

					 </div>
				</div>
			}
			{ flagOtpcontainer&&	


				<div className="form-new-pop">
					<div className="from-left">
						<img src="https://images.astroyogi.com/astroyogi2017/english/images/tta/sign_up_banner.jpg" alt="img"/>
					</div>

					<div className="from-right from-right-margin">
						<p  className="text-a">Enter OTP</p>
						<p className="text-b"> OTP has been sent to you on your mobile number <span>{mobile}</span> <a onClick={props.changeMobile}>Edit</a></p>
						<div className="custom-in-cls custom-in-cls-in">
							<OtpInput
						    onChange={props.handleChangeOtp}
							numInputs={4}
							separator={<span>-</span>}
							name='otp'
							value={otp ? otp :''}
							containerStyle={containerStyle}
							hasErrored={hasErrored}
							inputStyle={classNamex}
						
						
							/>
						
						</div>
						<div className="resrn-o-t">
							<span>Didn't receive the SMS? <a onClick={props.resendOtp}>Resend</a></span>

						</div>
						 {loader &&
							<img style={{ height: '25px',width: '25px' }}  src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
						}
						{error &&
							<div className={'alert alert-danger'}>{error}</div>
						}
						{success &&
							<div className={'alert alert-success'}>{success}</div>
						}
					  <button type="button" className="mob-btn" onClick={props.verifyOtp}>VERIFY OTP</button>

					 </div>
				</div>
				
			}
			{ flagSignin &&
			
			 <div><h1>Sign In</h1></div>
			
			}
		</form>
			
	</Modal>)
};
export default FrontendLogin;
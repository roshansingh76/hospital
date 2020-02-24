import React,{Component,Fragment}from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
Modal.setAppElement('#root');
 
const customStyles = {
  content : {
	
	
  }
};
const FrontendLogin=(props)=>{
	let model=props.data.modalIsOpen;
	let loading=props.data.loading;
	let error=props.data.error;
	let flagMobilecontainer=props.data.flagMobilecontainer;
	let flagOtpcontainer=props.data.flagOtpcontainer;
	return (<Modal
	   isOpen={model}
	   onAfterOpen={props.afterOpenModal}
	   onRequestClose={props.closeModal}
	     style={customStyles}
	   >
	   <a  className="model-close-cust" onClick={props.closeModal}><i class="fa fa-times"></i></a>
		<form>
			{flagMobilecontainer &&
				<div className="form-new-pop">
					<div className="from-left">
						<img src="https://images.astroyogi.com/astroyogi2017/english/images/tta/sign_up_banner.jpg" alt="img"/>
					</div>

					<div className="from-right">
						<p>Sign Up</p>
						<div className="custom-in-cls">
						  	<input type="text" placeholder="+9155" className ="form-control form-control-l-t" name="mobile"/>
						 	<input type="text" placeholder="Mobile Number" className ="form-control form-control-r-t" name="mobile" onChange={props.handleChange} required/>
						</div>
					  {loading &&
						<img style={{ height: '25px',width: '25px' }}  src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
						}
						{error &&
							<div className={'alert alert-danger'}>{error}</div>
						}
					  <button type="button" className="mob-btn" onClick={props.sendOtp}>Sign Up</button>
						  <div className="login-new-win">
						  	<p>Already have an account ? <a href="#">Sign In</a></p>
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
						<p className="text-b"> OTP has been sent to you on your mobile number <span>+919556464866</span> <a href="#">Edit</a></p>
						<div className="custom-in-cls">
						  	<input type="text"  className ="form-control form-control-l-o" name="mobile"/>
						  	<input type="text"  className ="form-control form-control-l-o" name="mobile"/>
						  	<input type="text"  className ="form-control form-control-l-o" name="mobile"/>
						  	<input type="text"  className ="form-control form-control-l-o" name="mobile"/>
						</div>
						<div className="resrn-o-t">
							<span>Didn't receive the SMS? <a href="#">Resend</a></span>

						</div>
						 {loading &&
							<img style={{ height: '25px',width: '25px' }}  src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
						}
						{error &&
							<div className={'alert alert-danger'}>{error}</div>
						}
					  <button type="button" className="mob-btn" onClick={props.sendOtp}>VERIFY OTP</button>

					 </div>
				</div>
				
			}
		</form>
			
	</Modal>)
};
export default FrontendLogin;
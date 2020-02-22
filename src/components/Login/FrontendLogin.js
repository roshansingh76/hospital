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
	return (<Modal
	   isOpen={model}
	   onAfterOpen={props.afterOpenModal}
	   onRequestClose={props.closeModal}
	     style={customStyles}
	   >
	   <a onClick={props.closeModal}><span aria-hidden="true">&times;</span></a>
		<form>
				<div className="container">
				  <input type="text" placeholder="Mobile Number" name="mobile" onChange={props.handleChange} required/>
				  {loading &&
					<img style={{ height: '25px',width: '25px' }}  src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
					}
					{error &&
						<div className={'alert alert-danger'}>{error}</div>
					}
				  <button type="button" onClick={props.sendOtp}>Login</button>
				</div>
		</form>
			
	</Modal>)
};
export default FrontendLogin;
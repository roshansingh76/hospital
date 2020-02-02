import React,{Component}from 'react';

import axios from 'axios';
import {AuthUser} from './../../config/auth';

class LoginPage extends Component{
	constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            submitted: false,
            loading: false,
            error: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password, returnUrl } = this.state;

        // stop here if form is invalid
        if (!(username && password)) {
            return;
        }

        this.setState({ loading: true });

		axios.post('http://127.0.0.1:8080/users/login', {
			username: username,
			password:password
		})
		.then((res) => {
			console.log(res.data)
		}).catch((error) => {
			console.log(error)
		});


		
    }
   render(){
		        const { username, password, submitted, loading, error } = this.state;

	return (
		<div className="content">
		   <div className="container-fluid">
			  <div className="row">
				 <div className="col-md-8 offset-md-2">
					<div className="account-content">
					   <div className="row align-items-center justify-content-center">
						  <div className="col-md-7 col-lg-6 login-left">
							 <img src="https://thefurnituregarage.com/public/frontend/img/login-banner.png" className="img-fluid" alt="Doccure Login"/>	
						  </div>
						  <div className="col-md-12 col-lg-6 login-right">
							 <div className="login-header">
								<h3>Login <span>User</span></h3>
							 </div>
							 <form action="#" onSubmit={this.handleSubmit}>
								<div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
								<label htmlFor="username">Username</label>
								<input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
									{submitted && !username &&
									<div className="help-block">Username is required</div>
									}
								</div>
								<div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
									<label htmlFor="password">Password</label>
									<input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
									{submitted && !password &&
									<div className="help-block">Password is required</div>
									}
								</div>
								<div className="text-right">
								   <a className="forgot-link" href="#">Forgot Password ?</a>
								</div>
							  <div className="form-group">
                        <button className="btn btn-primary" disabled={loading}>Login</button>
                        {loading &&
                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        }
                    </div>
                    {error &&
                        <div className={'alert alert-danger'}>{error}</div>
                    }
								
							 </form>
						  </div>
					   </div>
					</div>
				 </div>
			  </div>
		   </div>
		</div>
		)
    }
}
export default LoginPage;
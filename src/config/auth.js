import axios from 'axios';
export const AuthUser = {
    login,
    
};

function login(username, password){
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
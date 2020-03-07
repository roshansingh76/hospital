const axios = require('axios')
module.exports = axios.create({
  baseURL:'',
  //baseURL:'http://localhost:5000',
  timeout: 20000,
  withCredentials: false,
  crossDomain: false,
  proxy: false,
  headers: {
	 Authorization: `Bearer ${localStorage.getItem('token')}`,
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
    
  }
})
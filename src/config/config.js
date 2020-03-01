const axios = require('axios')
module.exports = axios.create({
  baseURL:'https://localhost:5000',
  timeout: 20000,
  withCredentials: false,
  crossDomain: true,
  headers: {
	 Authorization: `Bearer ${localStorage.getItem('token')}`,
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
    
  }
})
const axios = require('axios')
module.exports = axios.create({
  baseURL:'http://localhost:5000',
  timeout: 20000,
  withCredentials: false,
  crossDomain: true,
  headers: {
		Authorization: `Bearer ${localStorage.getItem('token')}`,
		'Access-Control-Allow-Origin': '*',
		'Content-Type': 'application/json'
  }
})
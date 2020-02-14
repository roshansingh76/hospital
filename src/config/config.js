const axios = require('axios')
module.exports = axios.create({
  baseURL:'http://159.89.173.96:5000',
  timeout: 10000,
  withCredentials: false,
  crossDomain: true,
  headers: {
		Authorization: `Bearer ${localStorage.getItem('token')}`,
		'Access-Control-Allow-Origin': '*',
		'Content-Type': 'application/json'
  }
})
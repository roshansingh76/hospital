import { AsyncStorage } from 'AsyncStorage';

const deviceStorage = {
  
  async saveItem(key, value) {
	try{
		localStorage.setItem(key,value);
		window.location.href=window.location.href;
    
    } catch (error) {
      console.log('AsyncStorage Error: ' + error.message);
    }
  },
  
  async loadJWT(type) {
    try {
      const value = localStorage.getItem(type);
	  if (value !== null) {
			return value;
	  } else {
			return null;
      }
    } catch (error) {
		console.log('AsyncStorage Error: ' + error.message);
    }
  },
  async deleteJWT() {
	try{
		localStorage.setItem('token','');
		window.location.href=window.location.href;
    
    } catch (error) {
      console.log('AsyncStorage Error: ' + error.message);
    }
  }
  
};
export default deviceStorage;
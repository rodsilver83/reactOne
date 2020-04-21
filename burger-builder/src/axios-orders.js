import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://reactburgerbuilder-31ed5.firebaseio.com/'
});

export default instance;

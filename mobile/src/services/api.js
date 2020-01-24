import axios from 'axios';

const api = axios.create({
  baseURL:'exp://at-35e.anonymous.mobile.exp.direct:80',
  //baseURL:'http://10.0.4.121:3333',
});

export default api;
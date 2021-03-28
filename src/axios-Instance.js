import axios from "axios";

var userToken = localStorage.getItem('loginToken')
const axiosInstance = axios.create({
  baseURL: process.env.PORT || 'http://localhost:8000/',
  // 'http://localhost:6003/' "https://luci-softthrive.herokuapp.com/"
  headers: {
    "Content-Type": "application/json",
    'authorization': `${userToken}` 
  },
});

export default axiosInstance;
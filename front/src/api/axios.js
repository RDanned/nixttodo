import axios from 'axios'

//axios.defaults.baseURL = 'http://localhost:5000/api'
axios.defaults.baseURL = process.env.VUE_APP_API_LINK

export default axios

import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.p2eanalytics.com',
  timeout: 3000,
})

export default api

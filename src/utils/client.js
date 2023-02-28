import axios from "axios";
export const API_URL = 'http://localhost:3001'
const api = axios.create({
    withCredentials: true,
    baseURL:API_URL
})
api.interceptors.request.use(cfg=>{
    if(localStorage.getItem('token')){
        cfg.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    }
    return cfg
})
export default api
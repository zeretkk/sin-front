import axios from "axios";
import {UserService} from "../services/UserService";
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
}, async (err)=>{
    if(err.response.status === 401 && err.config && !err.config._isRetry){
        err.config._isRetry = true
        try {
            const response = await UserService.refresh()
            localStorage.setItem('token', response.accessToken)
            return api.request(err.config)
        }catch (e) {
            localStorage.removeItem('token')
        }
    }
    throw err
})

export default api
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";
import {User} from "../types/User";
import api from "../utils/client";
import {update} from "../slices/userSlice";
import {store} from "../store";
import {AuthResponse, UserCredentials} from "../types/Authorization";


export class UserService{
    static async login(values: UserCredentials) : Promise<string>{
        try {
            const response = await api.post<AuthResponse>('/user/login', values)
            store.dispatch(update(response.data))
            return ''
        } catch (err: any){
            switch (err?.code){
                case "ERR_BAD_REQUEST":
                    return'Incorrect username or password'
                default:
                    return 'Something went wrong'
            }
        }
    }
    static async register(values: UserCredentials) : Promise<string>{
        try {
            const response= await api.post<AuthResponse>('/user/register', values)
            console.log(response)
            store.dispatch(update(response.data))
            return ''
        }catch (err: any) {
            switch (err?.response.status) {
                case 400:
                    if (err.response.data.errors.includes('unique')) {
                        return 'Username/email must be unique'
                    }
                    return 'Bad input'
                default:
                    return 'Something went wrong'
            }
        }
    }
    static async refresh() : Promise<AuthResponse>{
        const response = await api.get<AuthResponse>('/user/refresh')
        return response.data
    }
}
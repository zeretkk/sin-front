import {User} from "./User";

export interface UserCredentials {
    username: string
    password: string
    email?: string
}

export interface AuthResponse {
    user: User
    accessToken: string
    refreshToken: string
}
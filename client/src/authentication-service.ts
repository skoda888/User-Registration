

import axios ,{AxiosResponse} from 'axios';
import IUserData from './types/user-data';

const urlLogIn = 'localhost:5000/auth/login';

export default class AuthenticationService {
    static getUserData(): void {
        // pass 
    }

    static insertUserData(userData: IUserData){
        // pass
        return axios.post(urlLogIn, {
            fullName: userData.fullName,
            username: userData.username,
            email: userData.email,
            password: userData.password
        }).then((response: AxiosResponse) => {  
            console.log(response.data);
            return response.data;
        }).catch((error: Error) => {
            throw error;
        })
    }

    static deleteUserData(): void {
        // pass
    }

    static updateUserData(): void {
        // pass
    }
}
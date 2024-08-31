import config from '../config/config.js';
//documentations se liya h
import { Client , Account ,ID} from 'appwrite';

export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId)
        this.account = new Account(this.client);    
    }
    //same kaam kiya as doc bs class ka use krlia h upar

    //async await ki jagah promise bhi use kr skte the
    async createAccount({email,password,name}){
        try {
            const userAccount = await this.account.create(ID.unique(),email,password,name);

            if (userAccount) {
                // return userAccount;
                //call another method
                return this.login({email,password});
            } else {
                return userAccount
            }
        } catch (error) {
            throw error;
        }
}

    async login({email,password}){
        try {
            return await this.account.createEmailPasswordSession(email,password);
        } catch (error) {
            throw error;
        }
    }

const authService = new AuthService();

export default AuthService;

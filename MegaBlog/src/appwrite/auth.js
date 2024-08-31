import config from '../config/config.js';
import { Client, Account, ID } from 'appwrite';

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);
        this.account = new Account(this.client);    
    }

    // Create a new user account and log in
    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // Call login method if account creation is successful
                return this.login({ email, password });
            }
            return userAccount;
        } catch (error) {
            console.error('Error creating account:', error);
            throw error;
        }
    }

    // Log in a user with email and password
    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            console.error('Error logging in:', error);
            throw error;
        }
    }

    // Get the currently logged-in user
    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.error('Error getting current user:', error);
            throw error;
        }
    }

    // Log out the current user
    async logout() {
        try {
            await this.account.deleteSession();
        } catch (error) {
            console.error('Error logging out:', error);
            throw error;
        }
    }
}

// Create an instance of AuthService and export it
const authService = new AuthService();

export default authService;

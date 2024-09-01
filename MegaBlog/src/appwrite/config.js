import config from '../config/config.js';
import { Client, ID, Databases, Storage, Query } from 'appwrite';

export class Services {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug, // Slug is being used as the document ID
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            );
        } catch (error) {
            console.error("Error creating post:", error);
            throw error; // Consider rethrowing the error or handle it appropriately
        }
    }

    async updatePost({ title, slug, content, featuredImage, status }) {
        try {
            return await this.databases.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug) // Slug is being used as the document ID{
                    title,
                    content,
                    featuredImage,
                    status
                
        } catch (error) {
           console.error("Error updating post:", error);
            throw error; // Consider rethrowing the error or handle it appropriately 
        }
}
    async deletePost(slug){
        try {
             await this.databases.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug)
                return true;
            
        } catch (error) {
            console.log("Error deleting post:", error);
            throw error; // Consider rethrowing the error or handle it appropriately
            return false;
        }
    }
}

const service = new Services();
export default service;

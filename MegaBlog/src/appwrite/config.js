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

    async getPost(slug){
        try {
            await this.databases.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
            )
            return true;
        } catch (error) {
            console.log("Error getting post:", error);
            throw error; // Consider rethrowing the error or handle it appropriately
            return false;
        }
    }

    async getPosts(queries = [Query.equal("status", "active")] ){
        try {
            return await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                queries,
            )
        } catch (error) {
            console.log("Error getting posts:", error);
            throw error;
            return false;
        }
    }

    // file upload service

    async uploadFile(file){
        try {
             return await this.bucket.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Error uploading file:", error);
            throw error;
            return false;
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                config.appwriteBucketId,
                fileId
            )
        } catch (error) {
            console.log("Error deleting file:", error);
            throw error;
            return false;
        }
}

    async getFilePreview(fileId){
        try {
            return await this.bucket.getFilePreview(
                config.appwriteBucketId,
                fileId
            )
        } catch (error) {
            console.log("Error getting file preview:", error);
            throw error;
            return false;
        }
    }
}

const service = new Services();
export default service;

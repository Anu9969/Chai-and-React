import {React ,useContext,useState} from 'react'
import UserContext from '../context/UserContext'
import UserContextProvider from "../context/UserContextProvider";


function Profile() {
    const {user} = useContext(UserContext) //user is the state that we are getting from the context
  
   if(!user) return <h1> Please login to view your profile</h1>
    return (
        <div>
            <h1>Profile</h1>
            <h2>Username: {user.username}</h2>
            <h2>Password: {user.password}</h2>
        </div>
    )
}

export default Profile
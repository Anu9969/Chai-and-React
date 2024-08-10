import React from "react";
import UserContext from "./UserContext";
import { useState } from "react";

const UserContextProvider =({children})=>{
    const [user , setUser] = useState(null)
    return(
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )

    //ab iska access kese milega


}

export default UserContextProvider;
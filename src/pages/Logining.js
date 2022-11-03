import React from "react";
import { useEffect } from 'react';
import { useState } from "react";

import Login from "../components/Login"
import Edit from "./Edit"

import { getCookie } from "../common";
import {findUser} from "../utils"

const Loging = () => {
    const [username, setUsername] = useState()

    useEffect(() =>{
        let cookie = getCookie("jwt_token")
        if (cookie !== false){
          loginWithToken(cookie)
        }
      }, [])
    
      const loginWithToken = async(cookie)=>{
        const username = await findUser(cookie)
        setUsername(username)
    }

    return(
        <div id="page-login">
            <h1 id="title1">Login Page</h1>
            <Login setter={setUsername}/>

            {username ?
            <div>
                <h2 id="title1">Hello Welcome {username}</h2>
                <Edit username={username}/>
            </div> 
                :
                <h2 id="title1">Please Register</h2>
            }
        </div>
    );
};

export default Loging;
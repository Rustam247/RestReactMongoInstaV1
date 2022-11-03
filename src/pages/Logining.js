import React from "react";
import Login from "../components/Login"
import { useState } from "react";
import Edit from "./Edit"

const Loging = () => {
    const [username, setUsername] = useState()

    return(
        <div id="page-login">
            <h1 id="title1">Login Page</h1>
            <Login setter={setUsername}/>

            {username ?
            <div>
                <h2 id="title1">Hello Welcome {username}</h2>
                <Edit user={username}/>
            </div> 
                :
                <h2 id="title1">Please Register</h2>
            }
        </div>
    );
};

export default Loging;
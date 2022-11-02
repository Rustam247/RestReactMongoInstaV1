import React from "react";
import Login from "../components/Login"
import { useState } from "react";
import Edit from "./Edit"
import ReadUsers from "../components/ReadUsers";

const Loging = () => {
    const [user, setUser] = useState()

    return(
        <div>
            <h1>Login Page</h1>
            <Login setter={setUser}/>

            {user ?
            <div>
                <h2>Hello Welcome {user}</h2>
                <ReadUsers/>
            </div> 
                :
                <h2>Please Register</h2>
            }
        </div>
    );
};

export default Loging;
import React from "react";
import { useState } from "react";
import { loginUser } from "../utils";

const Login = ({setter}) =>{
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();


    const loginHadler = async (event) =>{
        event.preventDefault()
        await loginUser(username, password, setter)
    }
    return (
        <form onSubmit={loginHadler}>
            <label>Username:
                <input onChange={(event)=> setUsername(event.target.value)}/>
            </label>
            <br/>
            <br/>
            <label>Password:
                <input type="password" onChange={(event)=> setPassword(event.target.value)}/>
            </label>
            <br/>
            <br/>
            <button type="submit">Click here to login</button>
        </form>
    )
}

export default Login
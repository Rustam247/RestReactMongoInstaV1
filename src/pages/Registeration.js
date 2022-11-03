import React from "react";
import Register from "../components/Register";
import ReadUsers from "../components/ReadUsers";
import { useState } from "react";


const Registeration = () => {
    const [user, setUser] = useState()

    return(
        <div id="page-login">
            <h1 id="title1">Register Page</h1>
            <Register setter={setUser}/>

            {user ?
            <div>
                <h2 id="title1">Hello Welcome {user}</h2>
                <ReadUsers/>
            </div> 
                :
                <h2 id="title1">Please Register</h2>
            }
        </div>
    );
};

export default Registeration;
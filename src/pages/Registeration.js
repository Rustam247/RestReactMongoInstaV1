import React from "react";
import Register from "../components/Register";
import ReadUsers from "../components/ReadUsers";
import { useState } from "react";


const Registeration = () => {
    const [user, setUser] = useState()

    return(
        <div>
            <h1>Register Page</h1>
            <Register setter={setUser}/>

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

export default Registeration;
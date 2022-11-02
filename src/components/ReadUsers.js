import React from "react";
import { useEffect, useState } from "react";
import { readUsers } from "../utils";

const ReadUsers = () => {
    const [usernames, setUsernames] = useState()
    
    useEffect(()=>{
        loadUsers()
    }, [])

    const loadUsers = async () => {
        // await readUsers()
        let users = await readUsers()
        console.log(users)
        setUsernames(users)
    }
    return(
        <div className="container">
            {usernames?.length > 0
            // if username array exists AND lengh is greater than zero
                ?(
                    <div className="usernames">
                        {/* loop throgh the array using .map method and display a h3 pf each*/}
                        {usernames.map((user) =>(
                            <h3>{user}</h3>
                        ))}
                    </div>
                // else username array doesnt exists AND is less than zero
                ) : (
                    <div className="empty">
                        {/* displday no users*/}
                        <h3>No users found</h3>
                    </div>
                )
            }
        </div>
    )
}
export default ReadUsers;
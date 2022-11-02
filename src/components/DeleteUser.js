import React from "react";
import { useState } from "react";
import { deleteUser } from "../utils";

const DeleteUser = () => {
    const [username, setUsername] = useState();


    const deleteHandler = async (event) => {
        event.preventDefault()
        await deleteUser(username)
    }
    return (
        <form onSubmit={deleteHandler}>
            <label>Delete User:
                <input onChange={(event)=> setUsername(event.target.value)}/>
            </label>
            <br/>
            <br/>
            <button type="submit">Click to delete</button>
        </form>
    )
}

export default DeleteUser
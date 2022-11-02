import React from "react";
import UpdateUsers from "../components/UpdateUsers";
import DeleteUser from "../components/DeleteUser";

const Edit = () => {
    return(
        <div>
            <h1>Edit</h1>
            <br/>
            <h2>Change User name</h2>
            <UpdateUsers/>
            <h2>Delete your account</h2>
            <DeleteUser/>
        </div>
    );
};

export default Edit;
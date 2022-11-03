import React from "react";
import UpdateUsers from "../components/UpdateUsers";
import DeleteUser from "../components/DeleteUser";

const Edit = () => {
    return(
        <div id="page-login">
            <h1 id="title1">Edit</h1>
            <br/>
            <h2 id="title1">Change User name</h2>
            <UpdateUsers/>
            <h2 id="title1">Delete your account</h2>
            <DeleteUser/>
        </div>
    );
};

export default Edit;
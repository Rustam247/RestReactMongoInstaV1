import './App.css';
import React from 'react';
import Register from './components/Register';
import {useState} from "react"
import ReadUsers from './components/ReadUsers';
import UpdateUsers from "./components/UpdateUsers"
import DeleteUser from './components/DeleteUser';

function App() {
  const [user, setUser] = useState()

  return (
    <div className="App">
      <h1>Register</h1>

      <Register setter={setUser}/>
     
      {user ?
      <div> 
        <h2>Hello Welcome {user}</h2>
        <ReadUsers />
      </div>
        :
        <h2>Please Register</h2>
      }
      <h2>Update User</h2>
      <UpdateUsers/>
      <h2>Delete User</h2>
      <DeleteUser/>
    </div>
  );
}

export default App;

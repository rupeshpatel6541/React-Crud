import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ListUser(){

   const [users, setUsers] = useState([]);

   useEffect(() => {
     getUsers();
   }, []);

   function getUsers() {
    axios.get('http://localhost/api/users').then(function(response) {
        console.log(response.data);
        setUsers(response.data);
    });
}


const deleteUser = (id) => {
  axios.delete(`http://localhost/api/user/${id}/delete`).then(function(response){
      console.log(response.data);
      getUsers();
  });
}

    return (
        <div>
        <h2>List Users</h2>

        <table style={{marginLeft:"15%"}} cellSpacing="40">
            <thead>
               <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Age</th>
                  <th>Number</th>
                  <th>Address</th>
                  <th>Actions</th>

               </tr>
            </thead>

              <tbody>
                {Array.isArray(users) && users?.map((user, key) =>
                  <tr key={key}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.age}</td>
                    <td>{user.number}</td>
                    <td>{user.address}</td>
                    <td>
                        <Link to={`user/${user.id}/edit`} style={{marginRight:"20px"}}> Edit </Link>

                        <button onClick={() => deleteUser(user.id)}>Delete</button>
                    </td>
                  </tr>
                )}

              </tbody>
        </table>
        </div>
    )
}
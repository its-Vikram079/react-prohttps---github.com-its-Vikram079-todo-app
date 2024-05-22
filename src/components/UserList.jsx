import React, { useState, useEffect } from 'react';
import axios from 'axios';
import userStyle from './userlist.module.css'

const UserList = ({ setUser }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  const handleUserSelect = (user) => {
    setUser(user);
  };

  return (
    <div id={userStyle.cardWrapper}>
      <h1>User List</h1>
      <ul id='list' name="list">
        {users.map(user => (
          <li  key={user.id} onClick={() => handleUserSelect(user)}>
             {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;

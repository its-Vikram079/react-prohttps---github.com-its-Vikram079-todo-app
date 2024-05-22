import React, { useState } from 'react';
import UserList from './components/UserList';
import TodoList from './components/TodoList';
import './styles.css'
import Stopwatch from './components/Stopwatch';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <div id="main">
      <h1 style={{color:'red',fontSize:'50px'}}><span style={{color:'black'}}> 👤 USERS</span> PROFILE</h1>
      <UserList setUser={setUser} />
      {user && (
        <>
          <TodoList user={user} />
          {/* <Timer /> */}
          <Stopwatch/>
        </>
      )}
    </div>
  );
};

export default App;


